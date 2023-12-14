let res = document.querySelector('div#res')

function notas() {
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (n1 + n2) / 2

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
    if (media < 3) {
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <mark id="reprovado">REPROVADO</mark></p>`
    } else if (media > 3 && media < 6) {
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <mark id="recuperacao">RECUPERAÇÃO</mark></p>`
    } else if (media > 6) {
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <mark id="aprovado">APROVADO</mark></p>`
    }
}