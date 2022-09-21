import { Express } from "express";
import { CreateGrowdeverController } from "./controllers/create-growdever";
import { GetAllGrowdeversController } from "./controllers/get-all-growdevers";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  app.get("/growdevers", new GetAllGrowdeversController().getAll);
  app.post("/growdevers", new CreateGrowdeverController().create);
};

// M = MODELS
// V = VIEWS
// C = CONTROLLERS
