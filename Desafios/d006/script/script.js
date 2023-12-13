let cel = document.querySelector('button#botao').value
let fah = (cel * 1.8) + 32
let res = document.querySelector('div#res')
function converter() {
    window.prompt(`Digite uma temperatura em °C (Celsius)`)
    res.innerHTML = `${fah}`
}