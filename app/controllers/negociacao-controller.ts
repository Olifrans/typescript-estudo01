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

    private readonly SABADO = 6;
    private readonly DOMINGO = 0;




    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesWiew.update(this.negociacoes);
    }


    public adciona(): void {
        const negociacao = this.criarNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemWiew
                .update("Atenção! Negociações só podem ser realizadas, apenas em dias úteis");
            return;
        }

        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }


    private criarNegociacao(): Negociacao {
        const expRegular = /-/g;
        const date = new Date(this.inputData.value.replace(expRegular, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesWiew.update(this.negociacoes);
        this.mensagemWiew.update('Negociação adicionada com sucesso');
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }



}
