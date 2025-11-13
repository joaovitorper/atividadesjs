const input = require("readline-sync");
 
let tamanho = input.question("Digite o tamanho do suco (P, M, G): ").toUpperCase();
 
if (tamanho === "P") {
    console.log("Preço: R$ 5,00");
} else if (tamanho === "M") {
    console.log("Preço: R$ 7,00");
} else if (tamanho === "G") {
    console.log("Preço: R$ 9,00");
} else {
    console.log("Opção inválida.");
}