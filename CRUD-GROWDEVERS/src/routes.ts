import { Express } from "express";
import { AddGrowdeverSkillsController } from "./controllers/add-growdever-skills";
import { CreateGrowdeverController } from "./controllers/create-growdever";
import { GetAllGrowdeversController } from "./controllers/get-all-growdevers";
import { GetGrowdeverByIdController } from "./controllers/get-growdever-by-id";
import { RemoveGrowdeverController } from "./controllers/remove-growdever";
import { UpdateGrowdeverController } from "./controllers/update-growdever";
import { ValidateCpfMiddleware } from "./middlewares/validate-cpf";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  app.get("/growdevers", new GetAllGrowdeversController().getAll);
  app.post(
    "/growdevers",
    new ValidateCpfMiddleware().validateCpf,
    new CreateGrowdeverController().create
  );
  app.get("/growdevers/:id", new GetGrowdeverByIdController().getById);
  app.delete("/growdevers/:id", new RemoveGrowdeverController().remove);
  app.put("/growdevers/:id", new UpdateGrowdeverController().update);
  app.put(
    "/growdevers/:id/skills",
    new AddGrowdeverSkillsController().addSkills
  );
};

// M = MODELS
// V = VIEWS
// C = CONTROLLERS
