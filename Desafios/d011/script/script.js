let res = document.querySelector('div#res')

function bissexto() {
    let ano = Number(window.prompt(`Qual é o ano que você quer verificar?`))
    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        res.innerHTML += `<p id="sim">O ano de ${ano} <mark id="sim"><strong>É BISSEXTO</strong></mark></p>`
    } else {
        res.innerHTML += `<p id="nao">O ano de ${ano} <mark id="nao"><strong>NÃO É BISSEXTO</strong></mark></p>`
    }
}