let matriz = ['B', 'C', 'A', 'S', 'C', 'L', 'P', 'Q', 'F', 'Z', 'O', 'E', 'T', 'V', 'X', 41, 'W', 'A']

for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] == 'A' || matriz[i] == 'E' || matriz[i] == "I" || matriz[i] == "O" || matriz[i] == 'U') {
        continue
    }
    if (typeof matriz[i] == 'number') {
        break
    }
    console.log(matriz[i])
}