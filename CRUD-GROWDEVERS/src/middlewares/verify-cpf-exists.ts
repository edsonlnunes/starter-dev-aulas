import { NextFunction, Request, Response } from "express";
import { getGrowdevers } from "../db/growdevers";
import "../utils/extension-methods";

export class VerifyCpfExistsMiddleware {
  async verifyCpfExists(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { cpf } = request.body;

    const growdevers = await getGrowdevers();

    if (
      growdevers.some(
        (growdever) =>
          growdever.cpf === (cpf as string).clearSpecialCharacteres()
      )
    ) {
      return response.status(400).json({ error: "CPF já cadastrado" });
    }

    return next();
  }
}
