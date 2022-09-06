import { FreteServico } from "./frete-servico";

export class Dhl implements FreteServico {
  calcula(peso: number): number {
    const valor = 25;
    return valor;
  }
}

// export class Dhl {
//   calculaFrete(peso: number) {
//     const valor = 25;
//     return valor;
//   }
// }
