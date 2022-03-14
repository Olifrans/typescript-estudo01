import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesWiew extends View<Negociacoes> {

    //declaração do template na view
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>  
            <tbody>
                ${model.lista().map(negociacao => {
            return `
                    <tr>
                    <tr>                        
                    <td>${this.formatarData(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>                    
                </tr>                    
                `;
        }).join('')}
        </tbody>      
    </table>        
    `;
    }

    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
