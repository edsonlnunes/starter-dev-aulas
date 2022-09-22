import { Express } from "express";
import { CreateGrowdeverController } from "./controllers/create-growdever";
import { GetAllGrowdeversController } from "./controllers/get-all-growdevers";
import { GetGrowdeverByIdController } from "./controllers/get-growdever-by-id";
import { RemoveGrowdeverController } from "./controllers/remove-growdever";
import { UpdateGrowdeverController } from "./controllers/update-growdever";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  app.get("/growdevers", new GetAllGrowdeversController().getAll);
  app.post("/growdevers", new CreateGrowdeverController().create);
  app.get("/growdevers/:id", new GetGrowdeverByIdController().getById);
  app.delete("/growdevers/:id", new RemoveGrowdeverController().remove);
  app.put("/growdevers/:id", new UpdateGrowdeverController().update);
};

// M = MODELS
// V = VIEWS
// C = CONTROLLERS
