const readline = require('readline-sync');

let numeros = [];
let contador = 0;

while (contador < 5) {
    let numero = parseInt(readline.question(`Digite o ${contador + 1}º número inteiro: `));

    if (isNaN(numero)) {
        console.log("Valor inválido! Digite um número inteiro.");
        continue;
    }

    numeros.push(numero);
    contador++;
}

let soma = 0;
for (let num of numeros) {
    soma += num;
}

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);
let media = soma / numeros.length;

console.log("\nNúmeros digitados:", numeros.join(", "));
console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
console.log(`Soma dos números: ${soma}`);
console.log(`Média dos números: ${media.toFixed(2)}`);
