export class Aluno {
  private _nome: string;
  private _idade: number;
  private _nota: number = 0;
  private _status: string | undefined;

  get nome() {
    return this._nome;
  }

  get idade() {
    return this._idade;
  }

  get nota() {
    return this._nota;
  }

  get status() {
    return this._status;
  }

  constructor(nome: string, idade: number) {
    this._nome = nome;
    this._idade = idade;
  }
}
