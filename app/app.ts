import { NegociacaoController } from "./controllers/negociacao-controller.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adciona();
    });
}
else{
    throw Error("Error ao inicializar a aplicação, procure o administrador")
}

