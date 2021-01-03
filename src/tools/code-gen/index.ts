import { genTs } from "./ts-gen";
import { genArduino } from "./arduino-gen";

async function codeGen() {
  await genTs();
  await genArduino();
}

codeGen().catch(console.error);
