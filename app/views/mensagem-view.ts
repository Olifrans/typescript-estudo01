import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";


export class MensagemWiew extends View<string> {

    //declaração do template na view
    template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}