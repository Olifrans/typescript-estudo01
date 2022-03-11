import { NegociacaoController } from "./controllers/negociacao-controller.js";
//import { NegociacoesWiew } from "./views/negociacoes-view.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adciona();
});

// const negociacoesWiew = new NegociacoesWiew();
// const template =  negociacoesWiew.template();

// console.log(template);

