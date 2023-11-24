function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'ft-manha.png'
    document.body.style.background = '#E8AF7F'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'ft-tarde.png'
    document.body.style.background = '#BB4C02'
  } else {
    // BOA NOITE!
    img.src = 'ft-noite.png'
    document.body.style.background = '#0B4287'
  }
}