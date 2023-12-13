let res = document.querySelector('div#res')
let dolar = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")

function converter() {
    real = window.prompt("Quantos R$ você tem na carteira?")
    let total = real / dolar
    res.innerHTML = `<p>Você pode comprar US$${total.toFixed(2)} com seu dinheiro!</p>`
}