import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class GetAllGrowdeversController {
  getAll(request: Request, response: Response) {
    const data = growdeversDB.map((grow) => {
      return grow.toJson();
    });

    return response.json(data);
  }
}
