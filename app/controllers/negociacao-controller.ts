import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemWiew } from "../views/mensagem-view.js";
import { NegociacoesWiew } from '../views/negociacoes-view.js';


export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesWiew = new NegociacoesWiew('#negociacoesWiew', true);
    private mensagemWiew = new MensagemWiew('#mensagemWiew');



    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesWiew.update(this.negociacoes);
    }


    public adciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemWiew
                .update("Atenção! Negociações só podem ser realizadas, apenas em dias úteis");
            return;
        }

        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();
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
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}