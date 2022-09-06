import { Produto } from "./produto";

export class Carrinho {
  produtos: Produto[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  calcularValorTotal(): number {
    // const valorTotal = this.produtos.reduce(
    //   (total, produto) => total + produto.preco,
    //   0
    // );

    let valorTotal = 0;

    for (const produto of this.produtos) {
      valorTotal += produto.preco;
    }

    return valorTotal;
  }
}
