export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = []; //mais simplificado
    }
    adicionar(negociaco) {
        this.negociacoes.push(negociaco);
    }
    //lista(): ReadonlyArray<Negociacao> {
    lista() {
        return this.negociacoes;
    }
}
