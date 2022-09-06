import { Gmail } from "./gmail";

export class Usuario {
  // caracteristicas (atributos) da classe
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  // comportamento (metodo) da classe
  confirmarConta(servicoEmail: Gmail) {
    servicoEmail.enviarEmail(
      this.email,
      "Seu código de confirmacao é : 123456s"
    );
  }
}
