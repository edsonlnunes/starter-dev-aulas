"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // construtor (como a classe deve ser construida)
    constructor(nomeInicial, idadeInicial, alturaInicial, pesoInicial) {
        this.nome = nomeInicial;
        this.idade = idadeInicial;
        this.altura = alturaInicial;
        this.peso = pesoInicial;
        this.cpf = "NÃO REGISTRADO";
    }
    // comportamentos (métodos)
    caminhar(distancia) {
        // lógica (codigo)
        // console.log(`O(a) ${this.nome} está caminhando ${distancia} kilometros`);
        if (distancia < 5) {
            this.peso -= 0.1;
        }
        else if (distancia < 10) {
            this.peso -= 0.3;
        }
        else {
            this.peso -= 0.7;
        }
    }
    correr(distancia) {
        // lógica (codigo)
        // console.log(`O(a) ${this.nome} está correndo ${distancia} kilometros`);
        if (distancia < 5) {
            this.peso -= 0.4;
        }
        else if (distancia < 10) {
            this.peso -= 0.9;
        }
        else {
            this.peso -= 1;
        }
    }
    comer(alimento) {
        // lógica (codigo)
        // console.log(`O(a) ${this.nome} está comendo ${alimento}`);
        this.peso += 0.2;
        // this.peso = this.peso + 0.2
    }
}
exports.Pessoa = Pessoa;
