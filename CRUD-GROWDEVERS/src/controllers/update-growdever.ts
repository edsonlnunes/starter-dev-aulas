import { Request, Response } from "express";
import { getGrowdevers, saveGrowdevers } from "../db/growdevers";

export class UpdateGrowdeverController {
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, birth, status } = request.body;

    const growdeversDB = await getGrowdevers();

    const growdever = growdeversDB.find((growdever) => growdever.id === id);

    if (!growdever) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    try {
      growdever.updateInformation(name, new Date(birth), status);
      await saveGrowdevers(growdeversDB);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }

    return response.json(growdever.toJson());
  }
}
