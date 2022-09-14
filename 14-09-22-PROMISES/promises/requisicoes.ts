import axios, { Axios, AxiosError } from "axios";

const url = "https://reqres.in/api";

class Pessoa {
  nome!: string;
  idade!: string;
}

// axios
//   .get(`${url}/users/23`)
//   .then((resposta) => {
//     console.log(resposta.data);
//   })
//   .catch((erro) => {
//     if (erro instanceof AxiosError) {
//       console.log(erro.message);
//       console.log(erro.status);
//     }

//     // console.log(erro);
//   });
console.log("iniciou");

(async () => {
  try {
    console.log("iniciou o async");
    const resposta = await axios.get(`${url}/users?delay=5`);
    console.log("finalizou o async");
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      console.log(error.code);
    } else {
      console.log(error);
    }
  }
})();
console.log("finalizou");
