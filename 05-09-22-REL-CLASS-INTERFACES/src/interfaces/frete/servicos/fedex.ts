import { FreteServico } from "./frete-servico";

export class Fedex implements FreteServico {
  calcula(peso: number) {
    const valor = 30;
    return valor;
  }
}

// export class Fedex {
//   calculaValorFrete(peso: number) {
//     const valor = 30;
//     return valor;
//   }
// }
