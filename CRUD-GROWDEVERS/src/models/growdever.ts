import crypto from "crypto";
import "../utils/extension-methods";

export class Growdever {
  // caracteristicas (atributos)
  private _id: string;

  get id(): string {
    return this._id;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _birth: Date;

  get birth(): Date {
    return this._birth;
  }

  private _cpf: string;

  get cpf(): string {
    return this._cpf;
  }

  // 'STUDYING', 'GRADUATED', 'CANCELED'
  private _status: string;

  get status(): string {
    return this._status;
  }

  private _skills: string[];

  get skills(): string[] {
    return [...this._skills];
  }

  constructor(name: string, birth: string, cpf: string, skills?: string[]) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._birth = new Date(birth);
    this._cpf = cpf.clearSpecialCharacteres();
    this._status = "STUDYING";
    this._skills = skills ?? [];

    // this._skills = skills !== undefined ? skills : [];
    // this._skills = skills ? skills : [];

    // if(skills){
    // if (skills !== undefined) {
    //   this._skills = skills;
    // } else {
    //   this._skills = [];
    // }
  }

  // static nomeMentor: string = "Edson vindo do static";

  static create(
    id: string,
    name: string,
    cpf: string,
    birth: string,
    status: string,
    skills: string[]
  ): Growdever {
    const growdever = new Growdever(name, birth, cpf, skills);
    growdever._id = id;
    growdever._status = status;
    return growdever;
  }

  // comportamentos (métodos)

  updateInformation(name: string, birth: Date, status: string) {
    if (!name) throw new Error("Nome inválido");

    if (!birth || isNaN(birth.getDate()))
      throw new Error("Data de nascimento inválido");

    // 'STUDYING', 'GRADUATED', 'CANCELED'

    // if (
    //   status !== "STUDYING" &&
    //   status !== "GRADUATED" &&
    //   status !== "CANCELED"
    // ) {
    //   throw new Error(
    //     "Status inválido. Valores permitidos: STUDYING, GRADUATED ou CANCELED"
    //   );
    // }

    if (!["STUDYING", "GRADUATED", "CANCELED"].some((s) => s === status)) {
      throw new Error(
        "Status inválido. Valores permitidos: STUDYING, GRADUATED ou CANCELED"
      );
    }

    this._name = name;
    this._birth = birth;
    this._status = status;
  }

  updateSkills(newSkills: string[]) {
    if (!newSkills || newSkills.length === 0) {
      throw new Error("Não é possivel adicionar uma lista vazia.");
    }

    this._skills.push(...newSkills);
  }

  toJson() {
    return {
      id: this._id,
      name: this._name,
      birth: this._birth,
      cpf: this._cpf,
      status: this._status,
      skills: this._skills,
    };
  }

  deleteSkill(skill: string) {
    // "" -> false
    // undefined -> false
    // null -> false
    if (!skill) {
      throw new Error("Skill informada está inválida");
    }

    const indexSkill = this._skills.findIndex(
      (s) => s.toLowerCase() === skill.toLowerCase()
    );

    if (indexSkill < 0) {
      throw new Error("Skill não encontrada");
    }

    this._skills.splice(indexSkill, 1);
  }
}
