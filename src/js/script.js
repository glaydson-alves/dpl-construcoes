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