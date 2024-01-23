let lista = [41, 123, 412, 63, 41, 623, 51, 623, 43, 1234, 1, 41, 4, 52, 712, 52, 14]
let repetidos = []

for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
        if (lista[i] == lista[j]) {
            repetidos.push(lista[i])
        }
    }
}
console.log(`Eu detectei que os seguintes números foram repetidos: ${repetidos}`)