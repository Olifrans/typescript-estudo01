import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemWiew } from "../views/mensagem-view.js";
import { NegociacoesWiew } from '../views/negociacoes-view.js';


export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesWiew = new NegociacoesWiew('#negociacoesWiew');
    private mensagemWiew = new MensagemWiew('#mensagemWiew');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');

        this.negociacoesWiew.update(this.negociacoes);
    }

    adciona(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesWiew.update(this.negociacoes);
        this.mensagemWiew.update('Negociação adicionada com sucesso');   
      
        this.limparFormulario();
        
    }

    criarNegociacao(): Negociacao {
        const expRegular = /-/g;
        const date = new Date(this.inputData.value.replace(expRegular, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
