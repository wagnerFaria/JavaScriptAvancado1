

class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();


        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);
        let data = new Date(this._inputData.value.split('-'));
        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);

        console.log('Negociação: ', negociacao);
        //adicionar negociacao a uma lista  
    }
}