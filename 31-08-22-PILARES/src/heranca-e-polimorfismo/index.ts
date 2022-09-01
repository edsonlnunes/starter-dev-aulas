import { Diretor } from "./diretor";
import { Funcionario } from "./funcionario";
import { Gerente } from "./gerente";

// nao pode pois a classe Funcionario é uma classe Abstrata
// const func = new Funcionario("edson", "00123", 2000);

const gerente = new Gerente("Kelly", "21312", 4000, 12, 5432);

const diretor = new Diretor("Fabio", "123123", 5000, 1000);

console.log("Salario gerente: ", gerente.salario);
console.log("Bonificacao gerente: ", gerente.recuperarBonificacao());

console.log("Salario Diretor: ", diretor.salario);
console.log("Bonificacao Diretor: ", diretor.recuperarBonificacao());
