let res = document.querySelector('div#res')

function reajustar() {
    let nome = window.prompt("Qual é o nome do funcionário?")
    let sal = Number(window.prompt(`Qual é o salário de ${nome}`))
    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = sal + (sal * porcentagem / 100)
    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual era R$ ${sal}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${sal * porcentagem / 100} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${aumento}.</p>`
}