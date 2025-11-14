const input = require("readline-sync");

function calcularMedia() {
    let n1 = Number(input.question("Digite a primeira nota: "));
    let n2 = Number(input.question("Digite a segunda nota: "));
    // Variável local
    let media = (n1 + n2) / 2;
    console.log(`\nMédia: ${media}`);
    // Desafio extra: aprovado ou reprovado
    if (media >= 6) {
        console.log("Aluno APROVADO!");
    } else {
        console.log("Aluno REPROVADO!");
    }
}

calcularMedia();



