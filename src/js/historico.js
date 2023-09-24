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

//   let tabelaVetor =JSON.parse(localStorage.getItem("historico"))
  
//   if(tabelaVetor != null){
//     for(itens of tabelaVetor){
//       console.log(itens)

//     }
// }
let tabelaVetor = JSON.parse(localStorage.getItem("historico"))

if (tabelaVetor != null) {
  // Obtém a referência do elemento HTML onde a tabela será exibida
  let tabela = document.getElementById("historico-tabela")

  // Cria uma tabela HTML
  let table = document.createElement("table")
  table.classList.add("tabela")
 


  // Cria a linha de cabeçalho
  let headerRow = document.createElement("tr")
  let headers = ["Data", "Integrantes", "Local", "Veiculo"]
  for (let header of headers) {
    let th = document.createElement("th")
    th.textContent = header
    headerRow.appendChild(th)
  }
  table.appendChild(headerRow)

  // Adiciona os dados à tabela
  for (let item of tabelaVetor) {
    let row = document.createElement("tr")

    // Para cada item, crie células de dados e adicione os valores
    for (let key in item) {
      let cell = document.createElement("td")
      cell.textContent = item[key]
      row.appendChild(cell)
    }

    table.appendChild(row)
  }

  // Adiciona a tabela à página
  tabela.appendChild(table)
}
