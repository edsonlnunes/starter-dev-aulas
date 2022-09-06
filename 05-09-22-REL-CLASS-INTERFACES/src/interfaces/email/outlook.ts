import { ServicoEmail } from "./servico-email";

export class Outlook implements ServicoEmail {
  chavePrivada: string;
  chavePublica: string;

  constructor(privada: string, publica: string) {
    this.chavePrivada = privada;
    this.chavePublica = publica;
  }

  enviarEmail(destino: string, titulo: string, mensagem: string): boolean {
    console.log("enviando e-mail através do outlook");
    return true;
  }

  sendEmail(destino: string): string {
    console.log("enviando e-mail através do outlook");
    return "Ok";
  }
}
