// function job(valorQualquer: boolean, sucesso: Function, erro: Function) {
//     if (valorQualquer) {
//       sucesso("Sucesso");
//     } else {
//       erro("Erro");
//     }
//   }

//   console.log("Iniciou o programa");

//   job(
//     false,
//     () => {
//       console.log("Job processado com sucesso");
//     },
//     () => {
//       console.log("Erro no processamento do job");
//     }
//   );

//   console.log("Finalizou o programa");

function job(valorQualquer: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valorQualquer) {
        resolve("Promise resolvida");
      } else {
        reject("Promise rejeitada");
      }
    }, 3000);
  });
}

console.log("Iniciou o programa");

// job(false)
//   .then((mensagem) => {
//     console.log("Job processado com sucesso");
//   })
//   .catch(() => {
//     console.log("Erro no processamento do job");
//   });

async function executa() {
  try {
    const resposta = await job(false);
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}

executa();

console.log("Finalizou o programa");
