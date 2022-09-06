import { Gmail } from "./gmail";
import { Outlook } from "./outlook";
import { ServicoEmail } from "./servico-email";

export class Usuario {
  nome: string;
  email: string;
  senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  confirmarConta(servicoEmail: ServicoEmail): boolean {
    return servicoEmail.enviarEmail(
      this.email,
      "Confirmacao de conta",
      "Código de confirmacao: 123456"
    );
  }

  //   confirmarContaComGmail(gmail: Gmail): boolean {
  //     // temoss que criar a logica para enviar o código de confirmacao
  //     // através do e-mail
  //     return gmail.enviarEmailDoJeitoGmail(this.email);
  //   }

  //   confirmarContaComOutlook(outlook: Outlook): string {
  //     return outlook.sendEmail(this.email);
  //   }
}
