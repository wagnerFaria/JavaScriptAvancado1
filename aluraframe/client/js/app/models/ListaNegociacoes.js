class ListaNegociacoes {
    constructor() {
        this._listaNegociacoes = [];
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
    }
    get negociacoes() {
        // Programação defensiva. Para que retorne uma copia da lista de negociações
        return [].concat(this._listaNegociacoes);
    }
}