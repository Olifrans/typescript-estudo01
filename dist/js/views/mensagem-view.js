export class MensagemWiew {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //declaração do template na view
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
    //renderiza template através do elemento do construtor
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
