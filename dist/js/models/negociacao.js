export class Negociacao {
    constructor(_data, 
    // private _quantidade: number,
    // private _valor: number) { }
    //public readonly data: Date,
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
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
    get valume() {
        return this.quantidade * this.valor;
    }
}
