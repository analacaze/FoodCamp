//VARIAVEIS
var opcaoComida=0;
var opcaoBebida=0;
var opcaoSobremesa=0;
var valorComida=0;
var valorBebida=0;
var valorSobremesa=0;
var nomeComida;
var nomeBebida;
var nomeSobremesa;

//SELEÇÃO DOS ITENS
function selecao(tipo,opcao,valor){
  zerarSelecao(tipo);
  if (tipo==="comida"){
    opcaoComida=1;
    valorComida=valor;
    escolherComida(opcao);    
  }
  if (tipo==="bebida"){
    opcaoBebida=1;
    valorBebida=valor;
    escolherBebida(opcao);    
  }
  if (tipo==="sobremesa"){
    opcaoSobremesa=1;
    valorSobremesa=valor;
    escolherSobremesa(opcao);    
  }

  //ABILITA BOTAO
  if ((opcaoComida&&opcaoBebida&&opcaoSobremesa) === 1){
    var botao = document.querySelector("button");
    var textoBotao = document.querySelector("button p")
    botao.removeAttribute("disabled");
    botao.style.background="#32B72F";
    textoBotao.innerText = "Fechar pedido";    
  }
}

//CONFIRMA PEDIDO
function confirmar(){
  var telaConfirmacao = document.querySelector(".confirmacao");
  var comida = document.querySelector(".confirmacao .valor-comida .opcao");
  var bebida = document.querySelector(".confirmacao .valor-bebida .opcao");
  var sobremesa = document.querySelector(".confirmacao .valor-sobremesa .opcao");
  var precoComida = document.querySelector(".confirmacao .valor-comida .valor");
  var precoBebida = document.querySelector(".confirmacao .valor-bebida .valor");
  var precoSobremesa = document.querySelector(".confirmacao .valor-sobremesa .valor");
  var total = document.querySelector(".confirmacao .valor-total .valor");
  telaConfirmacao.style.display = "flex";
  comida.innerText = nomeComida;
  bebida.innerText = nomeBebida;
  sobremesa.innerText = nomeSobremesa;
  precoComida.innerText = valorComida.toFixed(2);
  precoBebida.innerText = valorBebida.toFixed(2);
  precoSobremesa.innerText = valorSobremesa.toFixed(2);
  var valorTotal= valorBebida+valorComida+valorSobremesa;
  total.innerText = valorTotal.toFixed(2);
}

//FINALIZA PEDIDO
function finalizar(){  
  var valorTotal= valorBebida+valorComida+valorSobremesa;
  valorTotal = valorTotal.toFixed(2);
  var mensagem = ("Olá, gostaria de fazer o pedido:\n" +
                  "- *Prato*: "+ nomeComida        +"\n" +
                  "- *Bebida*: "+ nomeBebida        +"\n" +
                  "- *Sobremesa*: " + nomeSobremesa  +"\n" +
                  "*Total*: R$ "+ valorTotal);
  var encoded = encodeURIComponent(mensagem);
  var url = ("https://wa.me/"+5519999652736+"?text="+encoded);
  window.location= url;  
}


//ESCOLHA DA COMIDA
function escolherComida(opcao){  
  if (opcao===1){    
    var item = document.querySelector(".comida .item:nth-child(1)");
    var icone = document.querySelector(".comida .item:nth-child(1) .icone"); 
    var nome = document.querySelector(".comida .item:nth-child(1) h3");    
  }
  if (opcao===2){
    var item = document.querySelector(".comida .item:nth-child(2)");
    var icone = document.querySelector(".comida .item:nth-child(2) .icone");
    var nome = document.querySelector(".comida .item:nth-child(2) h3");
  }
  if (opcao===3){
    var item = document.querySelector(".comida .item:nth-child(3)");
    var icone = document.querySelector(".comida .item:nth-child(3) .icone");
    var nome = document.querySelector(".comida .item:nth-child(3) h3");
  }
  if (opcao===4){
    var item = document.querySelector(".comida .item:nth-child(4)");
    var icone = document.querySelector(".comida .item:nth-child(4) .icone");
    var nome = document.querySelector(".comida .item:nth-child(4) h3");
  }

  //SELECIONA
  item.style.boxShadow ="0 0 0 5px #32B72F, 0 0 0 5px #32B72F";
  icone.style.display = "block";
  nomeComida = nome.innerText;
}

//ESCOLHA DA BEBIDA
function escolherBebida(opcao){
  if (opcao===1){    
    var item = document.querySelector(".bebida .item:nth-child(1)");
    var icone = document.querySelector(".bebida .item:nth-child(1) .icone"); 
    var nome = document.querySelector(".bebida .item:nth-child(1) h3");   
  }
  if (opcao===2){
    var item = document.querySelector(".bebida .item:nth-child(2)");
    var icone = document.querySelector(".bebida .item:nth-child(2) .icone");
    var nome = document.querySelector(".bebida .item:nth-child(2) h3");
  }
  if (opcao===3){
    var item = document.querySelector(".bebida .item:nth-child(3)");
    var icone = document.querySelector(".bebida .item:nth-child(3) .icone");
    var nome = document.querySelector(".bebida .item:nth-child(3) h3");
  }
  if (opcao===4){
    var item = document.querySelector(".bebida .item:nth-child(4)");
    var icone = document.querySelector(".bebida .item:nth-child(4) .icone");
    var nome = document.querySelector(".bebida .item:nth-child(4) h3");
  }

  //SELECIONA
  item.style.boxShadow ="0 0 0 5px #32B72F, 0 0 0 5px #32B72F";
  icone.style.display = "block";
  nomeBebida = nome.innerText;
}

//ESCOLHA DA SOBREMESA
function escolherSobremesa(opcao){
  if (opcao===1){    
    var item = document.querySelector(".sobremesa .item:nth-child(1)");
    var icone = document.querySelector(".sobremesa .item:nth-child(1) .icone");  
    var nome = document.querySelector(".sobremesa .item:nth-child(1) h3");  
  }
  if (opcao===2){
    var item = document.querySelector(".sobremesa .item:nth-child(2)");
    var icone = document.querySelector(".sobremesa .item:nth-child(2) .icone");
    var nome = document.querySelector(".sobremesa .item:nth-child(2) h3");
  }
  if (opcao===3){
    var item = document.querySelector(".sobremesa .item:nth-child(3)");
    var icone = document.querySelector(".sobremesa .item:nth-child(3) .icone");
    var nome = document.querySelector(".sobremesa .item:nth-child(3) h3");
  }
  if (opcao===4){
    var item = document.querySelector(".sobremesa .item:nth-child(4)");
    var icone = document.querySelector(".sobremesa .item:nth-child(4) .icone");
    var nome = document.querySelector(".sobremesa .item:nth-child(4) h3");
  }
  //SELECIONA
  item.style.boxShadow ="0 0 0 5px #32B72F, 0 0 0 5px #32B72F";
  icone.style.display = "block";
  nomeSobremesa = nome.innerText;
}

//DESMARCA TODAS SELEÇÕES
function zerarSelecao(tipo){
  if (tipo==="comida"){
    var item1 = document.querySelector(".comida .item:nth-child(1)");
    var icone1 = document.querySelector(".comida .item:nth-child(1) .icone");
    var item2 = document.querySelector(".comida .item:nth-child(2)");
    var icone2 = document.querySelector(".comida .item:nth-child(2) .icone");
    var item3 = document.querySelector(".comida .item:nth-child(3)");
    var icone3 = document.querySelector(".comida .item:nth-child(3) .icone");
    var item4 = document.querySelector(".comida .item:nth-child(4)");
    var icone4 = document.querySelector(".comida .item:nth-child(4) .icone");
  }
  if (tipo==="bebida"){
    var item1 = document.querySelector(".bebida .item:nth-child(1)");
    var icone1 = document.querySelector(".bebida .item:nth-child(1) .icone");
    var item2 = document.querySelector(".bebida .item:nth-child(2)");
    var icone2 = document.querySelector(".bebida .item:nth-child(2) .icone");
    var item3 = document.querySelector(".bebida .item:nth-child(3)");
    var icone3 = document.querySelector(".bebida .item:nth-child(3) .icone");
    var item4 = document.querySelector(".bebida .item:nth-child(4)");
    var icone4 = document.querySelector(".bebida .item:nth-child(4) .icone"); 
  }
  if (tipo==="sobremesa"){
    var item1 = document.querySelector(".sobremesa .item:nth-child(1)");
    var icone1 = document.querySelector(".sobremesa .item:nth-child(1) .icone");
    var item2 = document.querySelector(".sobremesa .item:nth-child(2)");
    var icone2 = document.querySelector(".sobremesa .item:nth-child(2) .icone");
    var item3 = document.querySelector(".sobremesa .item:nth-child(3)");
    var icone3 = document.querySelector(".sobremesa .item:nth-child(3) .icone");
    var item4 = document.querySelector(".sobremesa .item:nth-child(4)");
    var icone4 = document.querySelector(".sobremesa .item:nth-child(4) .icone");    
  }
  item1.style.boxShadow ="0 0 10px 5px #CBCBCB, 0 0 10px 5px #CBCBCB";
  icone1.style.display = "none";
  item2.style.boxShadow ="0 0 10px 5px #CBCBCB, 0 0 10px 5px #CBCBCB";
  icone2.style.display = "none";
  item3.style.boxShadow ="0 0 10px 5px #CBCBCB, 0 0 10px 5px #CBCBCB";
  icone3.style.display = "none";
  item4.style.boxShadow ="0 0 10px 5px #CBCBCB, 0 0 10px 5px #CBCBCB";
  icone4.style.display = "none";
}
