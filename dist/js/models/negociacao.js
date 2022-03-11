export class Negociacao {
    constructor(
    // private _data: Date,
    // private _quantidade: number,
    // private _valor: number) { }
    data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
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
    get valume() {
        return this.quantidade * this.valor;
    }
}
