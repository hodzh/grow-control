import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';
import {
  createPrinter,
  factory,
  NewLineKind,
  NodeFlags,
  Statement,
  SyntaxKind,
  Modifier,
  InterfaceDeclaration, PropertySignature, TypeNode, TypeElement
} from 'typescript';
import { Options, format } from 'prettier';
import { DeviceIOMeta } from '../../app/model/device-io';
import { DeviceResponseType } from '../../app/model/device-response-type';
import { DeviceRequestType } from '../../app/model/device-request-type';
import { structMeta } from '../../app/services/connect/device-struct-meta';
import { deviceResponseMeta } from '../../app/services/connect/device-response-meta';
import { deviceRequestMeta } from '../../app/services/connect/device-request-meta';

const dir = join(__dirname, '..', '..', '..');
const outDir = join(dir, 'src', 'app', 'auto');
const structPrefix = '';
const structSuffix = '';
const ext = '.ts';
const structFileName = 'struct';
const requestFileName = 'device-request';
const responseFileName = 'device-response';
const banner = `/* This file is autogenerated. Look at src/tools/code-gen */\n\n`;
let prettierConfig: Options;

async function init() {
  const prettierFilename = '.prettierrc';
  const prettierFilepath = join(dir, prettierFilename);
  prettierConfig = JSON.parse(await readFile(prettierFilepath, { encoding: 'utf-8' }));
  prettierConfig.parser = 'typescript';
}

async function writeTs(sourceName: string, content: Statement[]) {
  const sourcePath = join(outDir, sourceName) + ext;
  console.log('write', sourcePath);
  const sourceFile = factory.createSourceFile(
    content,
    factory.createToken(SyntaxKind.EndOfFileToken),
    NodeFlags.None
  );
  const printer = createPrinter({ newLine: NewLineKind.LineFeed });
  const source = printer.printFile(sourceFile);
  const formatted = format(source, prettierConfig);
  await writeFile(sourcePath, banner + formatted);
}

function getTypeName(name: string, prefix = '', suffix = ''): string {
  if (!name) {
    console.error('undefined name');
    return;
  }
  const parts = [name];
  if (prefix) {
    parts.unshift(prefix);
  }
  if (suffix) {
    parts.push(suffix);
  }
  return parts.map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('');
}

function genType(type: any, imports: any): TypeNode {
  if (typeof type === 'string') {
    return factory.createTypeReferenceNode(getTypeName(type, structPrefix, structSuffix));
  }
  switch (type.type) {
    case 'uint8':
    case 'uint16':
    case 'uint32':
      return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);
    case 'uint8[]':
    case 'uint16[]':
    case 'uint32[]':
      return factory.createArrayTypeNode(
        factory.createKeywordTypeNode(SyntaxKind.NumberKeyword));
    case 'list':
      return factory.createArrayTypeNode(genType(type.itemMeta, imports));
    case 'object':
      throw new Error('object not implemented');
  }
  throw new Error('undefined type');
}

function genProperty(
  name: string,
  type: any,
  imports: any
): PropertySignature {
  const modifiers = void 0;
  const questionToken = void 0;
  const typeNode = genType(type, imports);
  if (typeof type === 'string' && imports) {
    imports.add(getTypeName(type, structPrefix, structSuffix));
  }
  return factory.createPropertySignature(
    modifiers,
    name,
    questionToken,
    typeNode
  );
}

function genIface(
  structs,
  key: string,
  prefix: string,
  enumName: string,
  metaOrName: DeviceIOMeta | string,
  imports: any,
  payload: boolean,
) {
  const statements: Statement[] = [];
  const meta = typeof metaOrName === 'string' ? structs[metaOrName] : metaOrName;
  const name = getTypeName(key, prefix, '');
  const modifiers: Modifier[] = [factory.createModifier(SyntaxKind.ExportKeyword)];
  const additionalProperties: TypeElement[] = [];
  if (enumName) {
    additionalProperties.push(factory.createPropertySignature(
      void 0,
      'type',
      void 0,
      factory.createTypeReferenceNode(
        factory.createQualifiedName(
          factory.createIdentifier(enumName),
          factory.createIdentifier(key)
        ),
        undefined
      )
    ));
  }
  const iface: InterfaceDeclaration = factory.createInterfaceDeclaration(
    void 0,
    modifiers,
    name,
    void 0,
    void 0,
    [
      ...additionalProperties,
      ...(payload ? [factory.createPropertySignature(
        void 0,
        'payload',
        void 0,
        factory.createTypeLiteralNode(
          Object.keys(meta).map(property => genProperty(property, meta[property], imports))
        ),
      )] : Object.keys(meta).map(property => genProperty(property, meta[property], imports))),
    ]
  );
  statements.push(iface);
  return statements;
}

async function genIfaces(fileName: string, structs: any, meta: any, enumName: string, enumFile: string, prefix: string, payload: boolean) {
  const imports = new Set<string>();
  const statements: Statement[] = [].concat(...Object.keys(meta).map(key => {
    return genIface(structs, key, prefix, enumName, meta[key], imports, payload);
  }));
  const unionType = factory.createTypeAliasDeclaration(
    /*decorators*/ undefined,
    [factory.createModifier(SyntaxKind.ExportKeyword)],
    getTypeName(prefix),
    /*typeParameters*/ undefined,
    factory.createUnionTypeNode(Object.keys(meta)
      .map(v => factory.createTypeReferenceNode(
        factory.createIdentifier(`${getTypeName(v, prefix)}`))))
  );
  await writeTs(fileName, [
    factory.createImportDeclaration(
      [],
      [],
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(
            undefined,
            factory.createIdentifier(enumName)
          )
        ])
      ),
      factory.createStringLiteral('../model/' + enumFile)
    ),
    factory.createImportDeclaration(
      [],
      [],
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports(Array.from(imports).sort().map((name) =>
          factory.createImportSpecifier(
            undefined,
            factory.createIdentifier(name)
          )
        ))
      ),
      factory.createStringLiteral('./' + structFileName)
    ),
    ...statements,
    unionType
  ]);
}

async function genStructs(fileName: string, structs: any, prefix: string) {
  const statements: Statement[] = [].concat(...Object.keys(structs).map(key => {
    return genIface(structs, key, prefix, null, structs[key], null, false);
  }));
  await writeTs(fileName, statements);
}

export async function genTs() {
  await init();
  await genStructs(structFileName, structMeta, '');
  await genIfaces(responseFileName, structMeta, deviceResponseMeta,
    'DeviceResponseType', 'device-response-type', 'DeviceResponse', true);
  await genIfaces(requestFileName, structMeta, deviceRequestMeta,
    'DeviceRequestType', 'device-request-type', 'DeviceRequest', true);
}
