class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // Reflect.apply(this._armadilha, this._contexto, [this]);
    }
    
    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }
}