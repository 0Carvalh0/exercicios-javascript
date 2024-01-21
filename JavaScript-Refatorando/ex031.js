let Gênero = "Rock"
let Cantor = "Kurt Cobain"

switch (Gênero) {
    case "Rock":
        switch (Cantor) {
            case "Ozzy Osbourne":
                console.log(`Você tem um ótimo gosto! Rock e Ozzy Osbourne é TUDO!`)
                break
            case "Kurt Cobain":
                console.log(`Você gosta de Rock e de Kurt Cobain, VOCÊ É UM DEUS!`)
                break
            case "Freddie Mercury":
                console.log(`Freddie Mercury? WE WILL, WE WILL ROCK YOU!`)
                break
            default:
                console.log(`Não conheço esse cantor, mas sendo do rock tenho certeza que ele é bom!`)
        }
        break
    case "Pop":
        switch (Cantor) {
            case "Lady Gaga":
                console.log(`A proxima arlequina da DC, muito bom!`)
                break
            case "Beyoncé":
                console.log(`A diva do pop, ALL THE SINGLE LADIES!`)
                break
            case "Billie Eilish":
                console.log(`Que nome difícil como você conseguiu escrever certo?`)
        }
        break
    default:
        console.log(`Fiquei com preguiça de fazer outros gêneros musicais`)
}