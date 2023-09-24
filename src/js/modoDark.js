// Verifiquei se o tema está armazenado no localStorage
const temaArmazenado = localStorage.getItem("tema")

if (temaArmazenado) {
    tema = JSON.parse(temaArmazenado)
    if (tema.modo === "escuro") {
        document.body.classList.add('dark')
        escuro.checked = true
    }
}

// Adicionei um ouvinte de eventos para o interruptor de tema
escuro.addEventListener('change', () => {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        thema.modo = null
    } else {
        document.body.classList.add('dark')
        thema.modo = "escuro"
    }
    
    localStorage.setItem("tema", JSON.stringify(tema))
})
