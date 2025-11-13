const input = require("readline-sync");
 
let opcao;
 
do {
  console.log("\nMenu:");
  console.log("1 - Ver saldo");
  console.log("2 - Depositar");
  console.log("3 - Sair");
 
  opcao = input.question ("Escolha uma opcao: ");
 
} while (opcao !== "3");
 
console.log("Programa encerrado.");