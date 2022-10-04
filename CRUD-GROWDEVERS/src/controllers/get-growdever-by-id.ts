import { Request, Response } from "express";
import { getGrowdeversSync } from "../db/growdevers";

export class GetGrowdeverByIdController {
  getById(request: Request, response: Response) {
    const { id } = request.params;

    const growdever = getGrowdeversSync().find(
      (growdever) => growdever.id === id
    );

    if (!growdever) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    return response.status(200).json(growdever.toJson());
  }
}
