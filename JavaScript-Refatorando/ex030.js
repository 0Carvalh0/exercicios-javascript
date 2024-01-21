function diadasemana(diastr) {
    let dianum
    switch (diastr) {
        case "Domingo":
            dianum = 1
            break
        case "Segunda":
            dianum = 2
            break
        case "Terça":
            dianum = 3
            break
        case "Quarta":
            dianum = 4
            break
        case "Quinta":
            dianum = 5
            break
        case "Sexta":
            dianum = 6
            break
        case "Sábado":
            dianum = 7
    }
    return dianum
}

let diastr = "Sábado"
let dianum = diadasemana(diastr)

console.log(`A/O ${diastr} é o ${dianum}º dia da semana!`)