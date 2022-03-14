
export abstract class View<T> {
    protected elemento: HTMLElement;

    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {

        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não disponive no Dom, procure o administrador`)
        }

        //this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }

    //renderiza template através do elemento do construtor
    public update(model: T): void {
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