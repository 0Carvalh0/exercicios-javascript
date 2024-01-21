let matriz = [-1, 2, 15, -14, 29, 199, -199, -232, 2000]

for (let i = 0; i <= matriz.length - 1; i++) {
    if (matriz[i] < 0) {
        continue
    }
    console.log(matriz[i])
}