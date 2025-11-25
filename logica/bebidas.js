const input = require("readline-sync");
let opcao = Number(input.question("Digite um numero de 1 a 3: "));

switch (opcao) {
    case 1:
        console.log("Você escolheu Coca-Cola");
        break;
    case 2:
        console.log("Você escolheu Suco");
        break;
    case 3:
        console.log("Você escolheu Água");
        break;
    default:
        console.log("Opção inválida.");
        break;
}
