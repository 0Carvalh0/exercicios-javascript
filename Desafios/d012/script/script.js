let res = document.querySelector('div#res')

function mudarpreco() {
    let precoant = Number.parseFloat(window.prompt(`Qual era o preço anterior do produto?`))
    let precoatual = Number.parseFloat(window.prompt(`Qual é o preço atual do produto?`))

    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${precoant.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} e agora custa ${precoatual.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}.</p>`
    if (precoant > precoatual) {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${(precoant - precoatual).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${(((precoant / precoatual ) - 1) * 100).toFixed(2)}% pra baixo.</p>`
    } else if (precoant < precoatual) {
        res.innerHTML += `<p>Hoje o produto está mais caro</p>`
        res.innerHTML += `<p>O preço subiu ${(precoatual - precoant).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${(((precoatual / precoant ) - 1) * 100).toFixed(2)}% pra cima.</p>`
    } else if (precoant == precoatual) {
        res.innerHTML += `<p>Hoje o produto está no mesmo preço que antigamente</p>`
    }
}