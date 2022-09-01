import { Funcionario } from "./funcionario";

export class Diretor extends Funcionario {
  prolabore: number;

  constructor(nome: string, cpf: string, salario: number, prolabore: number) {
    super(nome, cpf, salario);
    this.prolabore = prolabore;
  }

  recuperarBonificacao(): number {
    return super.recuperarBonificacao() + 1000;
  }
}
