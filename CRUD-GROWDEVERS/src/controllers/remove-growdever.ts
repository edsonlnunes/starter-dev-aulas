import { Request, Response } from "express";
import { getGrowdeversSync, saveGrowdeversSync } from "../db/growdevers";

export class RemoveGrowdeverController {
  remove(request: Request, response: Response) {
    const { id } = request.params;

    const growdeversDB = getGrowdeversSync();

    const indexGrowdever = growdeversDB.findIndex(
      (growdever) => growdever.id === id
    );

    if (indexGrowdever < 0) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    growdeversDB.splice(indexGrowdever, 1);

    saveGrowdeversSync(growdeversDB);

    return response.status(200).json();
  }
}
