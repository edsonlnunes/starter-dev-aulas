import { Carrinho } from "./carrinho";
import { Produto } from "./produto";

const tv = new Produto("TV", 25);

const computador = new Produto("Computador", 30);

const meuCarrinho = new Carrinho();

meuCarrinho.adicionarProduto(tv);
meuCarrinho.adicionarProduto(computador);

console.log(meuCarrinho.calcularValorTotal());
