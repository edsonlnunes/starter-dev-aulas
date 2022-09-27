import { Request, Response, NextFunction } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class ValidateCpfMiddleware {
  validateCpf(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (!cpfValidator.isValid(cpf)) {
      return response.status(400).json({ error: "CPF inválido" });
    }

    return next();
  }
}
