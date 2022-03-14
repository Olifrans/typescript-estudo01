import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = []; //mais simplificado

    public adicionar(negociaco: Negociacao) {
        this.negociacoes.push(negociaco);
    }

    //lista(): ReadonlyArray<Negociacao> {
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}