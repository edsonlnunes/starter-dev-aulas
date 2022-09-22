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

    try {
      growdever.updateInformation(name, new Date(birth), status);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }

    return response.json(growdever.toJson());
  }
}
