// Seleciona o elemento HTML onde você deseja exibir a data
let elementoData = document.getElementById("data");

// Função para atualizar a data
function atualizarData() {
  let dataAtual = new Date();
  
  // Formate a data como desejar, por exemplo, "dd/mm/yyyy"
  let dataFormatada = dataAtual.toLocaleDateString();
  
  // Atualize o conteúdo do elemento HTML
  elementoData.textContent = dataFormatada;
}

// Chame a função para exibir a data inicialmente
atualizarData();

// Configure um intervalo para atualizar a data regularmente (por exemplo, a cada segundo)
setInterval(atualizarData, 1000);

// VALIDAÇÃO DE CAMPOS VAZIOS

document.getElementById('submit').addEventListener('click', ()=>{
  // Verifique se os campos estão vazios
  const integrante = document.getElementById('integrante').value
  const local = document.getElementById('local').value
  const veiculo = document.getElementById('veiculo').value

  if ( integrante === '' || local === '' || veiculo === ''){
    alert('Por favor, preencha todos os campos.')
    event.preventDefault() // Impede o envio do formulário
  }
  
})

// VALIDAÇÃO INTEGRANTE
let integranteValue = document.querySelector("#integrante")

integranteValue.addEventListener("blur", ()=>{
    if (integranteValue.value == ""){
      integranteValue.classList.add("border-danger","border-1")
    }else{
      integranteValue.classList.remove("border-danger","border-1")  
    }
})

// VALIDAÇÃO LOCAL
let localValue = document.querySelector("#local")

localValue.addEventListener("blur", ()=>{
    if (localValue.value == ""){
      localValue.classList.add("border-danger","border-1")
    }else{
      localValue.classList.remove("border-danger","border-1")  
    }
})

// VALIDAÇÃO VEICULO
let veiculoValue = document.querySelector("#veiculo")

veiculoValue.addEventListener("blur", ()=>{
    if (veiculoValue.value == ""){
      veiculoValue.classList.add("border-danger","border-1")
    }else{
      veiculoValue.classList.remove("border-danger","border-1")  
    }
})

// ************************************************//

// MODO ESCURO
const escuro = document.getElementById('escuro')


dark.addEventListener('change', () => {document.body.classList.toggle('dark')})

