// Seleciona o elemento HTML onde você deseja exibir a data
let elementoData = document.getElementById("data")
let dataFormatada = ""
let integrante = document.getElementById('integrante')
let local = document.getElementById('local')
let veiculo = document.getElementById('veiculo')
let dados = {
  data:"",
  integrante:"",
  local:"",
  veiculo:""
}

setTimeout(()=>{
  // window.location.href = "";
  splash.classList.replace("d-block","d-none")
  corpo.classList.replace("d-none","d-block")
}, 5000)

// Função para atualizar a data
function atualizarData() {
  let dataAtual = new Date();
  
  // Formate a data como desejar, por exemplo, "dd/mm/yyyy"
  dataFormatada = dataAtual.toLocaleDateString();
  
  // Atualize o conteúdo do elemento HTML
  elementoData.textContent = dataFormatada;
}

// Chame a função para exibir a data inicialmente
atualizarData();

// Configure um intervalo para atualizar a data regularmente (por exemplo, a cada segundo)
setInterval(atualizarData, 1000);

// VALIDAÇÃO DE CAMPOS VAZIOS

document.getElementById('submit').addEventListener('click', (event)=>{
  // Verifique se os campos estão vazios
  if ( integrante.value === '' || local.value === '' || veiculo.value === ''){
    alert('Por favor, preencha todos os campos.')
    event.preventDefault() 
    // Impede o envio do formulário
  }
  else{
    console.log(dados)
    localStorage.setItem("dados",JSON.stringify(dados))
    loader.classList.add("loader")
    console.log(dados)
    dados.data = dataFormatada
    dados.integrante = integrante.value
    dados.local = local.value
    dados.veiculo = veiculo.value
    localStorage.setItem("historicoTemp",JSON.stringify(dados))
    
    
    // window.location.href = (src/pages/desligar.html)
    // localStorage.getItem(JSON.parse(dados))
  }
  
})

// VALIDAÇÃO INTEGRANTE

integrante.addEventListener("blur", function(){
  if(integrante.value == ""){
    integrante.classList.add("border-danger")
  }
  else{
    integrante.classList.remove("border-danger")
  }
})

// VALIDAÇÃO LOCAL
local.addEventListener("blur", function(){
  if(local.value == ""){
    local.classList.add("border-danger")
  }
  else{
    local.classList.remove("border-danger")
  }
})

// VALIDAÇÃO VEICULO

veiculo.addEventListener("blur", function(){
  if(veiculo.value == ""){
    veiculo.classList.add("border-danger")
  }
  else{
    veiculo.classList.remove("border-danger")
  }
})

// ************************************************//

