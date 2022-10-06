import { Request, Response } from "express";
import { Growdever } from "../models/growdever";
import { saveGrowdeversSync, getGrowdeversSync } from "../db/growdevers";

export class CreateGrowdeverController {
  create(request: Request, response: Response) {
    const { name, cpf, birth, skills } = request.body;

    if (skills && !(skills instanceof Array)) {
      return response.status(400).json({ error: "Skills no formado inválido" });
    }

    const growdever = new Growdever(name, birth, cpf, skills);

    const growdevers = getGrowdeversSync();

    growdevers.push(growdever);

    saveGrowdeversSync(growdevers);

    return response.json(growdever.toJson());
  }
}
