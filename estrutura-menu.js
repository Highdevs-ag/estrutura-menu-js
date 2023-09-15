/****************************
*ESTRUTURA BASE PARA UM MENU*
*****************************/

function opcao1() {
    console.log("Você escolheu a Opção 1.");
  }
  
  function opcao2() {
    console.log("Você escolheu a Opção 2.");
  }
  
  function opcao3() {
    console.log("Você escolheu a Opção 3.");
  }
  
  function exibirMenu() {
    console.log("Selecione uma opção:");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
  }
  
  exibirMenu();
  
  const escolha = prompt("Digite o número da opção desejada:");
  
  if (escolha === "1") {
    opcao1();
  } else if (escolha === "2") {
    opcao2();
  } else if (escolha === "3") {
    opcao3();
  } else {
    console.log("Opção inválida.");
  } 
