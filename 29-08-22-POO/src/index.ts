import { Pessoa } from "./pessoa";

const mentor = new Pessoa("Edson", 24, 1.7, 70);

console.log("==== Dados do mentor ====");
console.log(`Nome: ${mentor.nome}`);
console.log(`Idade: ${mentor.idade}`);
console.log(`Peso: ${mentor.peso}`);
console.log(`Altura: ${mentor.altura}`);
console.log(`CPF: ${mentor.cpf}`);

console.log("\n\n");

mentor.correr(3);
console.log(`Peso: ${mentor.peso}`);
mentor.caminhar(5);
console.log(`Peso: ${mentor.peso}`);
mentor.correr(20);
console.log(`Peso: ${mentor.peso}`);
mentor.comer("Arroz");
console.log(`Peso: ${mentor.peso}`);
mentor.caminhar(12);
console.log(`Peso: ${mentor.peso}`);
mentor.comer("Pizza");

console.log(`Peso: ${mentor.peso}`);

// const aluno = new Pessoa("Jackson", 28, 1.76, 74);

// console.log("\n\n==== Dados de um aluno ====");
// console.log(`Nome: ${aluno.nome}`);
// console.log(`Idade: ${aluno.idade}`);
// console.log(`Peso: ${aluno.peso}`);
// console.log(`Altura: ${aluno.altura}`);
// console.log(`CPF: ${aluno.cpf}`);
