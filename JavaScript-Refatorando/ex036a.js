for (let linha = 1; linha <= 5; linha++) {
    let triangulo = ''
    for (let coluna = 0; coluna < linha; coluna++) {
        triangulo += '* '
    }
    console.log(triangulo)
}