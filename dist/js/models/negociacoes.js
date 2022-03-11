export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociaco) {
        this.negociacoes.push(negociaco);
    }
    lista() {
        return [...this.negociacoes];
    }
}
