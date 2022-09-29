import { Express } from "express";
import { AddGrowdeverSkillsController } from "./controllers/add-growdever-skills";
import { CreateGrowdeverController } from "./controllers/create-growdever";
import { DeleteSkillController } from "./controllers/delete-skills";
import { GetAllGrowdeversController } from "./controllers/get-all-growdevers";
import { GetGrowdeverByIdController } from "./controllers/get-growdever-by-id";
import { RemoveGrowdeverController } from "./controllers/remove-growdever";
import { UpdateGrowdeverController } from "./controllers/update-growdever";
import { ClearFormattingMiddleware } from "./middlewares/clear-formatting";
import { ValidateCpfMiddleware } from "./middlewares/validate-cpf";
import { VerifyCpfExistsMiddleware } from "./middlewares/verify-cpf-exists";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("ESTÁ FUNCIONANDO"));

  app.get("/growdevers", new GetAllGrowdeversController().getAll);
  app.post(
    "/growdevers",
    // new ClearFormattingMiddleware().clearFomatting,
    new ValidateCpfMiddleware().validateCpf,
    new VerifyCpfExistsMiddleware().verifyCpfExists,
    new CreateGrowdeverController().create
  );
  app.get("/growdevers/:id", new GetGrowdeverByIdController().getById);
  app.delete("/growdevers/:id", new RemoveGrowdeverController().remove);
  app.put("/growdevers/:id", new UpdateGrowdeverController().update);
  app.put(
    "/growdevers/:id/skills",
    new AddGrowdeverSkillsController().addSkills
  );
  app.delete("/growdevers/:id/skills", new DeleteSkillController().deleteSkill);
};

// M = MODELS
// V = VIEWS
// C = CONTROLLERS
