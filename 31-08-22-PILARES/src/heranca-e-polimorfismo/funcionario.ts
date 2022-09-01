export abstract class Funcionario {
  protected nome: string;
  protected cpf: string;

  private _salario: number;

  get salario(): number {
    return this._salario;
  }

  constructor(nome: string, cpf: string, salario: number) {
    this.nome = nome;
    this.cpf = cpf;
    this._salario = salario;
  }

  recuperarBonificacao(): number {
    return this._salario * 0.1;
  }
}
