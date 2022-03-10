import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 7, 77);

console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.valume);
