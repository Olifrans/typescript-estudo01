
export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    //renderiza template através do elemento do construtor
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    //metodo abstract, é reponsabilidade da class filha fazer a implementação    
    protected abstract template(model: T): string;
}