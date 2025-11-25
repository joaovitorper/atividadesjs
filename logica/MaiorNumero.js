const readline = require("readline-sync");

// Função que retorna o maior número entre três
function maiorNumero(n1, n2, n3) {
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else if (n2 >= n1 && n2 >= n3) {
        return n2;
    } else {
        return n3;
    }
}

// Programa principal
let num1 = Number(readline.question("Digite o primeiro numero: "));
let num2 = Number(readline.question("Digite o segundo numero: "));
let num3 = Number(readline.question("Digite o terceiro numero: "));

let maior = maiorNumero(num1, num2, num3);

console.log(`O maior numero é: ${maior}`);

