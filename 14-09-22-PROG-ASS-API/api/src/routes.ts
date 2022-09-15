import { Express, Request, Response } from "express";

export default (app: Express) => {
  app.get("/", (requisicao: Request, resposta: Response) => {
    resposta.send("<h1>Você acessou a rota RAIZ</h1>");
  });

  app.get("/numero-aleatorio", (requisicao: Request, resposta: Response) => {
    resposta.send(`Você recebeu o número ${(Math.random() * 100).toFixed()}`);
  });

  app.get("/seila", (requisicao: Request, resposta: Response) => {
    const { nome, idade } = requisicao.query;
    resposta.send(`Nome: ${nome} | Idade: ${idade}`);
  });
};
