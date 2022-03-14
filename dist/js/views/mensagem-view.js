import { View } from "./view.js";
export class MensagemWiew extends View {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
