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

  if ( integrante === '' || local === '' || veiculo === '') {
      alert('Por favor, preencha todos os campos.');
      event.preventDefault(); // Impede o envio do formulário
  }
})
// ************************************************//

// MODO ESCURO
const escuro = document.getElementById('escuro')


dark.addEventListener('change', () => {document.body.classList.toggle('dark')})

