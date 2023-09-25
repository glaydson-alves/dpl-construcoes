
const check = document.getElementById("escuro")
const modoEscuro = document.getElementById("escuro")


if (localStorage.getItem("escuro") === null) {
    localStorage.setItem("escuro", "false")
}
checkStatus()


modoEscuro.addEventListener("click", alterarModo)

function alterarModo() {
    if (localStorage.getItem("escuro") === "true") {
        localStorage.setItem("escuro", "false")
    } else {
        localStorage.setItem("escuro", "true")
    }
    checkStatus()
}

function checkStatus() {
    if (localStorage.getItem("escuro") === "true") {
        check.checked = true
        document.body.classList.add('dark')
    } else {
        check.checked = false
        document.body.classList.remove('dark')
    }
}

