export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) { }

  get valume(): Number {
    return this.quantidade * this.valor;
  }

  //Programação defensiva
  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const expRegular = /-/g;
    const date = new Date(dataString.replace(expRegular, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

}
