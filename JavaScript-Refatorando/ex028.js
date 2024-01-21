let fruta = "Laranja"

switch (fruta) {
    case "Mamão":
        console.log(`O ${fruta} custa R$8,99`)
        break
    case "Maça":
        console.log(`O ${fruta} custa R$5,00`)
        break
    case "Banana":
        console.log(`A ${fruta} custa R$15,00`)
        break
    default:
        console.log(`Desculpe eu não conheço ${fruta}!`)
}