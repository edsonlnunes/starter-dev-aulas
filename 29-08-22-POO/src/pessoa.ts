export class Pessoa {
  // caracteristicas (atributos)
  nome!: string;
  idade!: number;
  altura!: number;
  peso!: number;
  cpf!: string;

  // construtor (como a classe deve ser construida)

  constructor(
    nomeInicial: string,
    idadeInicial: number,
    alturaInicial: number,
    pesoInicial: number
  ) {
    this.nome = nomeInicial;
    this.idade = idadeInicial;
    this.altura = alturaInicial;
    this.peso = pesoInicial;
    this.cpf = "NÃO REGISTRADO";
  }

  // comportamentos (métodos)

  caminhar(distancia: number): void {
    // lógica (codigo)
    // console.log(`O(a) ${this.nome} está caminhando ${distancia} kilometros`);
    if (distancia < 5) {
      this.peso -= 0.1;
    } else if (distancia < 10) {
      this.peso -= 0.3;
    } else {
      this.peso -= 0.7;
    }
  }

  correr(distancia: number): void {
    // lógica (codigo)
    // console.log(`O(a) ${this.nome} está correndo ${distancia} kilometros`);

    if (distancia < 5) {
      this.peso -= 0.4;
    } else if (distancia < 10) {
      this.peso -= 0.9;
    } else {
      this.peso -= 1;
    }
  }

  comer(alimento: string): void {
    // lógica (codigo)
    // console.log(`O(a) ${this.nome} está comendo ${alimento}`);
    this.peso += 0.2;
    // this.peso = this.peso + 0.2
  }
}
