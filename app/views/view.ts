
export abstract class View<T> {
    protected elemento: HTMLElement;

    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }

    //renderiza template através do elemento do construtor
    public update(model: T): void {
        //const template = this.template(model);
        let template = this.template(model);

        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '')
        }



        this.elemento.innerHTML = template;
    }

    //metodo abstract, é reponsabilidade da class filha fazer a implementação    
    protected abstract template(model: T): string;
}