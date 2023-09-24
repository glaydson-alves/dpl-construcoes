let img = document.getElementById("img")
let input = document.getElementById("input")
let btnSubmit = document.getElementById('submit')
let listaHistorico = []

input.onchange = (e) =>{
    if(input.files[0]){
    img.src = URL.createObjectURL(input.files[0])
    img.style.borderRadius = "10%"
    img.style.width = "200px"}
}

// VALIDAÇÃO DE CAMPO VAZIO DA IMG
btnSubmit.addEventListener('click', ()=>{
    let inputImg = document.getElementById('input')
    let imgConteudo = inputImg.value

    if(imgConteudo === ''){
        console.log(imgConteudo)
        alert("por favor, selecione uma imagem.")
        event.preventDefault()
    }
    else{loader.style.display = 'block'}
    if(btnSubmit.classList.contains("concluir")){
        let resultado = JSON.parse(localStorage.getItem("historico"))
        let historicoTemp = JSON.parse(localStorage.getItem("historicoTemp"))

        if(resultado == null){
            listaHistorico.push(historicoTemp)
        }
        else{
            listaHistorico = resultado
            listaHistorico.push(historicoTemp) 
        }
        localStorage.setItem("historico", JSON.stringify(listaHistorico))
        localStorage.removeItem("historicoTemp")
        console.log(historicoTemp)
    }
})

// **************************



let mensagem = document.querySelector("#mensagem")
let restante = document.querySelector("#restante")

let limite = 100
mensagem.addEventListener("keyup", () => {
    restante.textContent = mensagem.value.length

    mensagem.setAttribute("maxlength", limite)
    if(restante.textContent == 100){
        mensagem.style.border = "1px solid red"
        restante.parentNode.style.color = "red"//parentNode siguinifica que estamos pegando  elemento(nó da árvore DOM) pai
    }
    else{
        mensagem.style.border = "1px solid #ccc"
        restante.parentNode.style.color = "black"
    }
})



