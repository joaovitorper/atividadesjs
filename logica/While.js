const readline = require('readline-sync');
 
let soma = 0;
let contador = 0;
 
while (contador < 5) {
    let numero = parseInt(readline.question(`Digite o ${contador + 1} numero inteiro positivo: `));
 
    if (numero < 0) {
        console.log("Número negativo não é aceito! Tente novamente.");
        continue;
    }
    soma += numero;
    contador++;
}
console.log(`\nA soma dos 5 números positivos digitados é: ${soma}`);
