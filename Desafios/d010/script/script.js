let res = document.querySelector('div#res')

function bhaskara() {
    let a = Number(window.prompt(`Qual é o valor de a?`))
    let b = Number(window.prompt(`Qual é o valor de b?`))
    let c = Number(window.prompt(`Qual é o valor de c?`))
    let delta = (b ** 2) - 4 * a * c

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark></p>`
}