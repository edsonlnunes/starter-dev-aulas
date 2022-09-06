import { ServicoEmail } from "./servico-email";

export class Gmail implements ServicoEmail {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  enviarEmail(destino: string, titulo: string, mensagem: string): boolean {
    console.log("Enviando e-mail através do gmail");
    return true;
  }

  enviarEmailDoJeitoGmail(enderecoEmail: string): boolean {
    console.log("Enviando e-mail através do gmail");
    return true;
  }
}
