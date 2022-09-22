import { Request, Response } from "express";
import { Growdever } from "../models/growdever";
import { growdeversDB } from "../db/growdevers";

export class CreateGrowdeverController {
  create(request: Request, response: Response) {
    const { name, cpf, birth, skills } = request.body;

    const growdever = new Growdever(name, birth, cpf, skills);

    growdeversDB.push(growdever);

    return response.json(growdever.toJson());
  }
}
