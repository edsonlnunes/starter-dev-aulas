import { Request, Response, NextFunction } from "express";
import "../utils/extension-methods";

export class ClearFormattingMiddleware {
  clearFomatting(request: Request, response: Response, next: NextFunction) {
    const cpf = request.body.cpf as string;

    const onlyCpf = cpf.replace(/\W/g, "");

    request.body.cpf = onlyCpf;

    next();
  }
}
