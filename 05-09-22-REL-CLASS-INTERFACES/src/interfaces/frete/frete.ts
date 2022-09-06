import { Correios } from "./servicos/correrios";
import { Dhl } from "./servicos/dhl";
import { Fedex } from "./servicos/fedex";
import { FreteServico } from "./servicos/frete-servico";
import { Tnt } from "./servicos/tnt";

export class Frete {
  freteServico: FreteServico;

  constructor(servico: FreteServico) {
    this.freteServico = servico;
  }

  calcula(peso: number): number {
    const valorFrete = this.freteServico.calcula(peso);
    return valorFrete;
  }
}

// import { Correios } from "./servicos/correrios";
// import { Dhl } from "./servicos/dhl";
// import { Fedex } from "./servicos/fedex";
// import { Tnt } from "./servicos/tnt";

// export class Frete {
//   calcula(servico: string, peso: number): number {
//     let valorFrete: number;

//     switch (servico) {
//       case "pac": {
//         const correios = new Correios();
//         valorFrete = correios.calculaFrete("pac", peso);
//         break;
//       }
//       case "sedex": {
//         const correios = new Correios();
//         valorFrete = correios.calculaFrete("sedex", peso);
//         break;
//       }
//       case "tnt": {
//         const tnt = new Tnt();
//         valorFrete = tnt.calcula(peso);
//         break;
//       }
//       case "dhl": {
//         const dhl = new Dhl();
//         valorFrete = dhl.calculaFrete(peso);
//         break;
//       }
//       case "fedex": {
//         const fedex = new Fedex();
//         valorFrete = fedex.calculaValorFrete(peso);
//         break;
//       }
//       default:
//         throw new Error("Servico de frete nao suportado");
//     }

//     return valorFrete;
//   }
// }
