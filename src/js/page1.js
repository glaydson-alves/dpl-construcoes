let img = document.getElementById("img")
let input = document.getElementById("input")

input.onchange = (e) =>{
    if(input.files[0])
    img.src = URL.createObjectURL(input.files[0])
    img.style.borderRadius = "10%"
}

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
    }
})