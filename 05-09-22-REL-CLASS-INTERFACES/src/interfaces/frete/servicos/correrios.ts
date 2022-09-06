import { FreteServico } from "./frete-servico";

export class Correios implements FreteServico {
  tipoTransporte: string;

  constructor(tipoTransporte: string) {
    this.tipoTransporte = tipoTransporte;
  }

  calcula(peso: number) {
    let valor: number;

    if (this.tipoTransporte === "pac") {
      valor = 22;
    } else {
      valor = 40;
    }

    return valor;
  }
}

// export class Correios {
//   calculaFrete(tipo: string, peso: number) {
//     let valor: number;
//     if (tipo === "pac") {
//       valor = 22;
//     } else {
//       valor = 40;
//     }

//     return valor;
//   }
// }
