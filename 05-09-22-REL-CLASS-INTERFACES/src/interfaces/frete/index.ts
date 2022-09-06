import { Frete } from "./frete";
import { Correios } from "./servicos/correrios";
import { Fedex } from "./servicos/fedex";
import { Tnt } from "./servicos/tnt";

// const frete = new Frete();
// const valorDoFrete = frete.calcula("tnt", 40);

const tnt = new Tnt();
const frete = new Frete(new Correios("pac"));

const valorDoFrete = frete.calcula(40);

console.log("Valor do frente: $", valorDoFrete);
