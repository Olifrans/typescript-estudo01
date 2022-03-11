export class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  constructor(
    private _data: Date, 
    private _quantidade: number, 
    private _valor: number) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  get data(): Date {
    return this._data;
  }

  get quantidade(): Number {
    return this._quantidade;
  }

  get valor(): Number {
    return this._valor;
  }

  get valume(): Number{
    return this._quantidade * this._valor;
  }
}
