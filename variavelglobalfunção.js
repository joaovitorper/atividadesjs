const readline = require('readline-sync');


let valorFinal;

function calcularDesconto() {
    let valorCompra = Number(readline.question("Digite o valor total da compra: "));
    let desconto = Number(readline.question("Digite a porcentagem de desconto: "));

    // Desafio extra: validar desconto
    while (desconto > 100 || desconto < 0) {
        console.log(" Desconto inválido! Deve ser entre 0% e 100%.");
        desconto = Number(readline.question("Digite novamente a porcentagem de desconto: "));
    }

   
    valorFinal = valorCompra - (valorCompra * (desconto / 100));
}


calcularDesconto();


console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));
