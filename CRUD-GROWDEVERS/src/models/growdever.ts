import crypto from "crypto";

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
    return this._skills;
  }

  constructor(name: string, birth: string, cpf: string, skills?: string[]) {
    this._id = crypto.randomUUID();
    this._name = name;
    this._birth = new Date(birth);
    this._cpf = cpf;
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

  // comportamentos

  updateInforation(name: string, birth: Date, status: string) {
    this._name = name;
    this._birth = birth;
    this._status = status;
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
}
