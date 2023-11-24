var num = document.getElementById('fnum')
var sel = document.getElementById('flista')
var res = document.getElementById('res')
var n = []

function add() {
  if (num.value.length <= 0 || num.value < 1 || num.value > 100 || n.indexOf(num.value) != -1) {
    window.alert('[ERRO] Valor inválido ou já encontrado na lista.')
  } else {
    var item = document.createElement('option')
    n.push(Number(num.value))
    item.text = `Valor ${num.value} adicionado.`
    sel.appendChild(item)
    res.innerHTML = ''
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (n.length <= 0){
    window.alert('[ERRO] Adicione valores antes de finalizar!')
  } else {
    let tot = n.length
    let maior = n[0]
    let menor = n[0]
    let soma = 0
    let med = 0
    for (let pos in n) {
      soma += n[pos]
      if (n[pos] > maior)
        maior = n[pos]
      if (n[pos] < menor)
        menor = n[pos]
    }
    med = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${med}.</p>`
  }
}