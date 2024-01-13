function testeHoisting() {
    console.log(curso)
    let escola = "Alberto Conte"
    var curso = "Refatorando"
}

// testeHoisting()

function exemploHoisting() {
    iniciar()

    function iniciar() {
        console.log("Olá Mundo!")
    }
}

exemploHoisting()