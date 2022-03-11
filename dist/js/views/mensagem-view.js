import { View } from "./view.js";
export class MensagemWiew extends View {
    //declaração do template na view
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
