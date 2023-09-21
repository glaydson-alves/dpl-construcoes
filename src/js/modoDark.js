let thema = {
    modo:"dark"
}

const escuro = document.getElementById('escuro')

dark.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    localStorage.setItem("thema", JSON.stringify(thema))
})