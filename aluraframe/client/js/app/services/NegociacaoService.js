class NegociacaoService {
    obterNegociacoesDaSemana(cb) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    console.log('Obtemos as negociações do servidor');
                    console.log(JSON.parse(xhr.responseText));
                    cb(null, (JSON
                        .parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))));
                } else {
                    console.log(xhr.responseText);
                    cb('Não foi possivel obter as negociações da semana', null);
                }
            }
        };
        xhr.send();
    }
}