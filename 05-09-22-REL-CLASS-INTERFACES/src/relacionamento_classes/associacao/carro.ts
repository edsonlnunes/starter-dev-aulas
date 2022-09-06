export class Carro {
  // caracteristicas (atributos) da classe
  tipoCombustivel: string;
  consumo?: number;
  tipoCarro: string;
  cor: string;
  private modelo: string;
  marca: string;
  qtdGasolina: number;

  get modeloCarro(): string {
    return this.modelo;
  }

  constructor(
    tCombustivel: string,
    tCarro: string,
    c: string,
    modelo: string,
    marca: string
  ) {
    this.tipoCarro = tCarro;
    this.tipoCombustivel = tCombustivel;
    this.cor = c;
    this.modelo = modelo;
    this.marca = marca;
    this.qtdGasolina = 0;
  }

  // recuperarModeloCarro(): string {
  //   return this.modelo;
  // }

  visualizarModeloCarro() {
    console.log(this.modelo);
  }

  abastecer(qtdLitros: number) {
    this.qtdGasolina = qtdLitros;
  }
}
