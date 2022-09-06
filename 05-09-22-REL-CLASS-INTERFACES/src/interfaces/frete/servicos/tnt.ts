import { FreteServico } from "./frete-servico";

export class Tnt implements FreteServico {
  calcula(peso: number) {
    const valor = 50;
    return valor;
  }
}

// export class Tnt {
//   calcula(peso: number) {
//     const valor = 50;
//     return valor;
//   }
// }
