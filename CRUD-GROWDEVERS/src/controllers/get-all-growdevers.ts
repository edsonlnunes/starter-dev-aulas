import { Request, Response } from "express";
import { growdeversDB } from "../db/growdevers";

export class GetAllGrowdeversController {
  getAll(request: Request, response: Response) {
    const { name, status } = request.query;

    let growdevers = growdeversDB.map((grow) => {
      return grow.toJson();
    });

    if (name || status) {
      growdevers = growdevers.filter((growdever) => {
        let filterName = true;
        let filterStatus = true;

        if (name) {
          filterName = growdever.name
            .toLowerCase()
            .includes(name.toString().toLowerCase());
        }

        if (status) {
          filterStatus =
            growdever.status.toUpperCase() === status.toString().toUpperCase();
        }

        return filterName && filterStatus;
      });
    }

    return response.json(growdevers);
  }
}
