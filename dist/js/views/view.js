export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //renderiza template através do elemento do construtor
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    //declaração do template na view
    template(model) {
        throw Error('Classe filha precisa implementar template ou metodo teplate');
    }
}
