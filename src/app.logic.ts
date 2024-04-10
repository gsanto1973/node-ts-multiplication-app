import fs from "fs";
import { yarg } from "./config/plugins/args.pluging";

//console.log({ yarg });
const { b, l, s } = yarg;
console.log({ b, l, s });

let outputMessage: string = "";
//const base = 5;
const headerMessage = `
========================
      Tabla del ${b}
========================\n
`;

// for (let i = 1; i <= 10; i++) {
//   outputMessage += `${base} x ${i} = ${base * i}\n`;
// }

for (let i = 1; i <= l; i++) {
  outputMessage += `${b} x ${i} = ${b * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if (s) console.log(outputMessage);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
//fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
fs.writeFileSync(`${outputPath}/table-${b}.txt`, outputMessage);
console.log("File created!");
