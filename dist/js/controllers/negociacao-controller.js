import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemWiew } from "../views/mensagem-view.js";
import { NegociacoesWiew } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesWiew = new NegociacoesWiew('#negociacoesWiew');
        this.mensagemWiew = new MensagemWiew('#mensagemWiew');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesWiew.update(this.negociacoes);
    }
    adciona() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesWiew.update(this.negociacoes);
        this.mensagemWiew.update('Negociação adicionada com sucesso');
        this.limparFormulario();
    }
    criarNegociacao() {
        const expRegular = /-/g;
        const date = new Date(this.inputData.value.replace(expRegular, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
