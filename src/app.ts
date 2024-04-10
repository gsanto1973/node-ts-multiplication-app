// console.log(process.argv);

import { yarg } from "./config/plugins/args.pluging";
import { ServerApp } from "./presentation/server-app";

// const [tsnode, app, ...args] = process.argv;
// console.log(process.argv);
// console.log(yarg.b);

(async () => {
  //console.log("Ejecutando");
  await main();
  //console.log("Termina");
})();

async function main() {
  //console.log("Main ejecutando");
  console.log(yarg);
  const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;
  ServerApp.run({ base, limit, showTable, name, destination });
  //console.log("Main termina");
}
