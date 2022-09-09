export class Growdever {
  nome: string;
  temCaneca: boolean;
  temCamisa: boolean;
  growcoins: number;
  desempenho: number;
  idade: number;
  mentores = ["Edson", "Vini"];

  constructor(
    nome: string,
    temCaneca: boolean,
    temCamisa: boolean,
    growcoins: number,
    desempenho: number,
    idade: number
  ) {
    this.nome = nome;
    this.temCamisa = temCamisa;
    this.temCaneca = temCaneca;
    this.growcoins = growcoins;
    this.desempenho = desempenho;
    this.idade = idade;
  }
}
