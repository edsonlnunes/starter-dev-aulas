import { ContaCorrente } from "./conta-corrente";
import { ContaPoupanca } from "./conta-poupanca";

export class Banco {
  poupanca: ContaPoupanca;
  corrente: ContaCorrente;

  constructor() {
    this.corrente = new ContaCorrente();
    this.poupanca = new ContaPoupanca();
  }
}
