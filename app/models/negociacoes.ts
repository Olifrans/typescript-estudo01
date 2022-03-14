import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = []; //mais simplificado

    adicionar(negociaco: Negociacao) {
        this.negociacoes.push(negociaco);
    }

    //lista(): ReadonlyArray<Negociacao> {
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}