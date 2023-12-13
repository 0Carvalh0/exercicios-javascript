let res = document.querySelector('div#res')

function desconto() {
    let produto = window.prompt('Qual produto você está comprando?')
    let preco = window.prompt(`Qual é o preço de ${produto}?`)

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>O preço original era R$${preco}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$${(preco * 10 / 100).toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$${preco - (preco * 10 / 100).toFixed(2)} no produto ${produto}.</p>`
}