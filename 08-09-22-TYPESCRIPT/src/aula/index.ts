import { Growdever } from "./growdever";

const growdevers: Growdever[] = [
  new Growdever("Paulo", false, false, 100, 80, 29),
  new Growdever("Rafael", false, false, 700, 90, 30),
  new Growdever("Kelly", false, false, 600, 85, 24),
  new Growdever("Douglas", true, true, 800, 90, 25),
  new Growdever("Diener", false, false, 800, 95, 24),
];

// map e reduce
// const totalGrowdev = growdevers
//   .map((growdever) => growdever.growcoins)
//   .reduce((acumulador, atual) => acumulador + atual);

// console.log(total);

// const somenteComCamiseta = growdevers.filter(
//   (growdever) => growdever.temCamisa
// );
// console.log(somenteComCamiseta);

// forEach
// growdevers.forEach((growdever) => console.log(growdever.nome));

// for..of
// for (const growdever of growdevers) {
//   console.log(growdever.nome);
// }

// for..in
// for (const indice in growdevers) {
//   console.log(growdevers[indice].nome);

//   for (const indiceMentor in growdevers[indice].mentores) {
//     console.log(growdevers[indice].mentores[indiceMentor]);
//   }
// }

// for
// for (let i = 0; i < growdevers.length; i++) {
//   console.log(growdevers[i].nome);
// }

console.log(`Hello, world!`);
