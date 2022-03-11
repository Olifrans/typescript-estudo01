
export class View <T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    
    //renderiza template através do elemento do construtor
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    //declaração do template na view
    template(model: T): string {
        throw Error ('Classe filha precisa implementar template ou metodo teplate')
    }
}