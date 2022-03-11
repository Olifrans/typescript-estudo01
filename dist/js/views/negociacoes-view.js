export class NegociacoesWiew {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //declaração do template na view
    template(model) {
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
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>                    
                    </tr>                    
                    `;
        }).join('')}


            </tbody>      
        </table>        
        `;
    }
    //renderiza template através do elemento do construtor
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
