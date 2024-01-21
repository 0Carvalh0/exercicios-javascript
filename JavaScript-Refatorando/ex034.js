let matriz = [2, 51, 21, 15, 50, 84, 18, 20, 19]

console.log("BREAK")
for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] === 50) {
        break
    }
    console.log(matriz[i])
}

console.log(`------------------------------------------------------`)

console.log("CONTINUE")
for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] === 50) {
        continue
    }
    console.log(matriz[i])
}