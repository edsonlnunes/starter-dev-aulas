import { Gmail } from "./gmail";
import { Outlook } from "./outlook";
import { Usuario } from "./usuario";

const gmail = new Gmail("TOKEN_EDSON");

const outlook = new Outlook("MINHA-SENHA", "SENHA-DE-TODOS");

const usuario = new Usuario("Edson", "edson.martins@outlook.com", "123456");

if (usuario.email.includes("outlook")) {
  //   const resposta = usuario.confirmarContaComOutlook(outlook);
  const resposta = usuario.confirmarConta(outlook);
  console.log("Resposta do e-mail: ", resposta);
}

if (usuario.email.includes("gmail")) {
  //   const resposta = usuario.confirmarContaComGmail(gmail);
  const resposta = usuario.confirmarConta(gmail);
  console.log("Resposta do e-mail: ", resposta);
}
