import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class UpdateGrowdeverController {
  update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, birth, status } = request.body;

    const growdever = growdeversDB.find((growdever) => growdever.id === id);

    if (!growdever) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    growdever.updateInforation(name, birth, status);

    return response.json(growdever.toJson());
  }
}
