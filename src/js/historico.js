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
console.log(tabelaVetor)

if (tabelaVetor != null){
  let corpo = document.getElementById("historico-tabela")
  for(let item of tabelaVetor){
    let linha = document.createElement("tr")
    linha.innerHTML = 
    `
    <td>${item.data}</td>
    <td>${item.integrante}</td>
    <td>${item.local}</td>
    <td>${item.veiculo}</td>
   `

   corpo.appendChild(linha)
  }
}



// if (tabelaVetor != null) {
//   let tabela = document.getElementById("historico-tabela")

//   let table = document.createElement("table")
//   table.classList.add("tabela")
 
//   let headerRow = document.createElement("tr")
//   let headers = ["Data", "Integrantes", "Local", "Veiculo"]
//   for (let header of headers) {
//     let th = document.createElement("th")
//     th.textContent = header
//     headerRow.appendChild(th)
//   }
//   table.appendChild(headerRow)

//   for (let item of tabelaVetor) {
//     let row = document.createElement("tr")

//     for (let key in item) {
//       let cell = document.createElement("td")
//       cell.textContent = item[key]
//       row.appendChild(cell)
//     }

//     table.appendChild(row)
//   }
  
//   tabela.appendChild(table)
// }
