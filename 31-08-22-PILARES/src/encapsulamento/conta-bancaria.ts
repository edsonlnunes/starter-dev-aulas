export class ContaBancaria {
  private saldo: number;
  public titular: string;
  public numero: string;
  private senha: string;

  constructor(titular: string, numero: string, senha: string) {
    this.titular = titular;
    this.numero = numero;
    this.senha = senha;
    this.saldo = 0;
  }

  // comportamento (ação)

  private autentica(senha: string): boolean {
    return this.senha === senha;
  }

  alterarSenha(senhaAtual: string, novaSenha: string) {
    if (this.autentica(senhaAtual)) {
      this.senha = novaSenha;
    }
  }

  public visualizarSaldo(senha: string) {
    if (this.autentica(senha)) {
      console.log("Saldo: ", this.saldo);
    }
  }

  public depositar(valor: number, senha: string) {
    if (this.autentica(senha)) {
      this.saldo += valor;
    }
  }

  public sacar(valor: number, senha: string) {
    if (this.autentica(senha)) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
      } else {
        throw new Error("Saldo insuficiente");
      }
    }
  }
}
