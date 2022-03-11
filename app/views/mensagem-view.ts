import { Negociacoes } from "../models/negociacoes.js";


export class MensagemWiew {

    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    //declaração do template na view
    template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }

    //renderiza template através do elemento do construtor
    update(model: string): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

}