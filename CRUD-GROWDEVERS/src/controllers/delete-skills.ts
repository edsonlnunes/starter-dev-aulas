import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class DeleteSkillController {
  deleteSkill(request: Request, response: Response) {
    const { id } = request.params;
    const { skill } = request.body;

    const growdever = growdeversDB.find((growdever) => growdever.id === id);

    if (!growdever) {
      return response.status(400).json({ error: "Growdever não encontrada" });
    }

    try {
      growdever.deleteSkill(skill);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(200).json({ skills: growdever.skills });
  }
}
