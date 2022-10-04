import { Growdever } from "../models/growdever";
import fs from "fs";

// export const growdeversDB: Growdever[] = [];

// ===== assincrono e callback =====
export const getGrowdevers = async (): Promise<Growdever[]> => {
  // se arquivo não existir, retorna uma lista vazia
  if (!fs.existsSync("db.json")) {
    return [];
  }

  return new Promise<Growdever[]>((resolve, reject) => {
    fs.readFile("db.json", (error, data) => {
      if (error) {
        return reject(new Error("Erro ao ler o arquivo"));
      }

      const growdeversJSON = JSON.parse(data.toString()) as any[];

      return resolve(
        growdeversJSON.map((growdever) =>
          Growdever.create(
            growdever.id,
            growdever.name,
            growdever.cpf,
            growdever.birth,
            growdever.status,
            growdever.skills
          )
        )
      );
    });
  });
};

export const saveGrowdevers = (growdevers: Growdever[]): Promise<boolean> => {
  const dataInJSON = JSON.stringify(
    growdevers.map((growdever) => growdever.toJson())
  );

  return new Promise<boolean>((resolve, reject) => {
    fs.writeFile("db.json", dataInJSON, (error) => {
      if (error) return reject(new Error("Erro ao salvar no arquivo"));

      return resolve(true);
    });
  });
};

// ===== sincrona =====
export const getGrowdeversSync = (): Growdever[] => {
  // se arquivo não existir, retorna uma lista vazia
  if (!fs.existsSync("db.json")) {
    return [];
  }

  const data = fs.readFileSync("db.json");

  const growdeversJSON = JSON.parse(data.toString()) as any[];

  return growdeversJSON.map((growdever) =>
    Growdever.create(
      growdever.id,
      growdever.name,
      growdever.cpf,
      growdever.birth,
      growdever.status,
      growdever.skills
    )
  );
};

export const saveGrowdeversSync = (growdevers: Growdever[]): void => {
  const dataInJSON = JSON.stringify(
    growdevers.map((growdever) => growdever.toJson())
  );

  fs.writeFileSync("db.json", dataInJSON);
};
