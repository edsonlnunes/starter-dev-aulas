import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class AddGrowdeverSkillsController {
  addSkills(request: Request, response: Response) {
    const { id } = request.params;
    const { skills } = request.body;

    const growdever = growdeversDB.find((grow) => grow.id === id);

    if (!growdever) {
      return response.status(404).json({ error: "Growdever não encontrado" });
    }

    try {
      growdever.updateSkills(skills);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }

    return response.json(growdever.skills);
  }
}
