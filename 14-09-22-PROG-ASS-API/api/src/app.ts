import express from "express";
import minhasRotas from "./routes";

const app = express();

minhasRotas(app);

app.listen(3333, () => console.log("Servidor iniciado"));
