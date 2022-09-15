import express, { Request, Response } from "express";

const app = express();

app.get("/", (requisicao: Request, resposta: Response) => {
  resposta.send("<h1>Você acessou a rota RAIZ</h1>");
});

app.get("/numero-aleatorio", (requisicao: Request, resposta: Response) => {
  resposta.send(`Você recebeu o número ${(Math.random() * 100).toFixed()}`);
});

app.listen(3333, () => console.log("Servidor iniciado"));
