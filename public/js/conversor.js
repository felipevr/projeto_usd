let cotacao = {};

let invertido = false;

window.addEventListener('load', event => {
    fetch('/api/cotacao/hoje')
        .then(res => res.json())
        .then(dados => {
            cotacao = dados;
            atualizarTela(cotacao);
        })
    ;
});

function atualizarTela(cotacao) {
    document.getElementById('cotacao-data').innerText = moment(cotacao.data).format('DD/MM/YYYY');
    document.getElementById('cotacao-venda').innerText = cotacao.venda;
    document.getElementById('cotacao-compra').innerText = cotacao.compra;
    console.log(cotacao);
}