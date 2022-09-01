import { Diretor } from "./diretor";
import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario {
  qtdFuncionarios: number;
  private senha: number;

  constructor(
    nome: string,
    cpf: string,
    salario: number,
    qtdFunc: number,
    senha: number
  ) {
    super(nome, cpf, salario);
    this.qtdFuncionarios = qtdFunc;
    this.senha = senha;
  }

  recuperarBonificacao(): number {
    return this.salario * 0.15;
  }
}
