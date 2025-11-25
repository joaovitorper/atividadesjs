const input = require("readline-sync");

let estacao = Number(input.question("Digite um número de 1 a 4 para a estação do ano: "));

switch (estacao) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("opçao e invalida");
        break;
}
