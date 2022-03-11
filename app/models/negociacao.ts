export class Negociacao { 
  constructor(
    private _data: Date,
    // private _quantidade: number,
    // private _valor: number) { }
    //public readonly data: Date,
    public readonly quantidade: number,
    public readonly valor: number) { }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return this.data;
  }
  // get data(): Date {
  //   return this._data;
  // }

  // get quantidade(): Number {
  //   return this._quantidade;
  // }

  // get valor(): Number {
  //   return this._valor;
  // }

  // get valume(): Number {
  //   return this._quantidade * this._valor;
  // }

  get valume(): Number {
    return this.quantidade * this.valor;
  }
}
