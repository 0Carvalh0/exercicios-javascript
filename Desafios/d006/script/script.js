let res = document.querySelector('div#res')
function converter() {
    let cel = window.prompt(`Digite uma temperatura em °C (Celsius)`)
    let fah = cel * 1.8 + 32
    let kel = cel + 273.15
    res.innerHTML = `<h2>A temperatura de ${cel}°C, corresponde a...</h2>`
    res.innerHTML += `<p>${kel}°K (Kelvin)</p>`
    res.innerHTML += `<p>${fah}°F (Fahrenheit)</p>`
}