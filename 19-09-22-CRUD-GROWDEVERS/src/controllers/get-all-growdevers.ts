import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class GetAllGrowdeversController {
  getAll(request: Request, response: Response) {
    const data = growdeversDB.map((grow) => {
      return {
        id: grow.id,
        name: grow.name,
        birth: grow.birth,
        cpf: grow.cpf,
        status: grow.status,
        skills: grow.skills,
      };
    });

    return response.json(data);
  }
}
