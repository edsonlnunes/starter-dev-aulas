import { Universidade } from "./universade";

export class Pessoa {
  nome: string;
  dataNascimento: string;
  universidade?: Universidade;
  qtdDinheiro: number;

  constructor(nome: string, dataNascimento: string, qtdDinheiro: number) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.qtdDinheiro = qtdDinheiro;
  }

  entrarUniversidade(universade: Universidade) {
    if (universade.preco > this.qtdDinheiro) throw new Error("Sem dinheiro");
    this.universidade = universade;
  }
}
