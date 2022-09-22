import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class GetAllGrowdeversController {
  getAll(request: Request, response: Response) {
    const { name } = request.query;

    let growdevers = growdeversDB.map((grow) => {
      return grow.toJson();
    });

    if (name) {
      growdevers = growdevers.filter((growdever) => {
        return growdever.name
          .toLowerCase()
          .includes(name.toString().toLowerCase());
      });
    }

    return response.json(growdevers);
  }
}
