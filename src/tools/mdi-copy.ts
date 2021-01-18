const fs = require('fs').promises;
const path = require('path');
const SVGSpriter = require('svg-sprite');
const glob = require('glob');

const mdiIcons = [
  'alarm',
  'alert-circle-outline',
  'arrow-left',
  'backup-restore',
  'bluetooth',
  'bluetooth-connect',
  'bluetooth-off',
  'bluetooth-transfer',
  'ceiling-light',
  'cellphone-settings',
  'chart-bar',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chip',
  'clock-outline',
  'close-circle-outline',
  'cog-outline',
  'cogs',
  'content-save',
  'cup-water',
  'cursor-pointer',
  'database',
  'delete-forever-outline',
  'dev-to',
  'download-circle-outline',
  'eyedropper',
  'filter',
  'filter-outline',
  'format-list-bulleted',
  'fountain',
  'gauge',
  'hydraulic-oil-level',
  'lightbulb',
  'lightbulb-off',
  'menu',
  'monitor',
  'oil-temperature',
  'pencil',
  'pinwheel',
  'plus-circle-outline',
  'shower-head',
  'sync',
  'thermometer',
  'thermometer-alert',
  'thermometer-chevron-down',
  'thermometer-chevron-up',
  'timer',
  'timer-off',
  'view-dashboard',
  'watch',
  'water-pump',
  'weather-night',
  'weather-sunny',
  'webcam',
  'white-balance-incandescent',
  'wind-turbine',
];

function promisify(f) {
  return new Promise((resolve, reject) => {
    f((e, r) => {
      if (e) {
        return reject(e);
      }
      resolve(r);
    });
  });
}

async function removeDir(itemPath) {
  let error;
  const stat = await fs.stat(itemPath).catch(e => error = e);
  if (error) {
    if (error.code === 'ENOENT') {
      return;
    }
    throw error;
  }
  if (stat.isDirectory()) {
    const childItems = await fs.readdir(itemPath);
    await Promise.all(childItems.map(childItemName => removeDir(path.join(itemPath, childItemName))));
    await fs.rmdir(itemPath);
  } else {
    await fs.unlink(itemPath);
  }
}

async function mdiCopy() {
  const srcDir = path.join(__dirname, '../../node_modules/@mdi/svg/svg');
  const destDir = path.join(__dirname, '../../src/svg', 'mdi');
  console.log('remove directory', destDir);
  await removeDir(destDir);
  console.log('create directory', destDir);
  await fs.mkdir(destDir);
  console.log('copy icons from', srcDir, 'to', destDir);
  await Promise.all(mdiIcons.map(ii => (async i => {
    const filename = `${i}.svg`;
    const src = path.join(srcDir, filename);
    console.log(`copying ${i}`);
    await fs.copyFile(src, path.join(destDir, filename));
  })(ii)));
}

async function makeSprite() {
  const srcDir = path.join(__dirname, '../../src/svg');
  const destDir = path.join(__dirname, '../../src/assets');
  console.log('make sprite from', srcDir, 'to', destDir);
  const spriter = new SVGSpriter({
    dest: destDir,
    mode: {
      defs: true,
    },
  });
  const files = await promisify(glob.glob.bind(glob, '**/*.svg', {cwd: srcDir})) as string[];
  console.log(files);
  const content = await Promise.all(files.map(async file => [
    path.join(srcDir, file),
    path.basename(file),
    await fs.readFile(path.join(srcDir, file), {encoding: 'utf-8'}),
  ]));
  content.forEach(file => {
    spriter.add(...file);
  });
  const result = await promisify(spriter.compile.bind(spriter)) as any;
  await fs.writeFile(path.join(destDir, 'sprite.svg'), result.defs.sprite._contents);
}

async function build() {
  await mdiCopy();
  await makeSprite();
}

build().then(() => console.log('done')).catch(e => console.error(e));
