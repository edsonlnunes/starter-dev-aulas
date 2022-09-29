import { NextFunction, Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";
import "../utils/extension-methods";

export class VerifyCpfExistsMiddleware {
  verifyCpfExists(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (
      growdeversDB.some(
        (growdever) =>
          growdever.cpf === (cpf as string).clearSpecialCharacteres()
      )
    ) {
      return response.status(400).json({ error: "CPF já cadastrado" });
    }

    return next();
  }
}
