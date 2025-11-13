const input = require("readline-sync");
 
let quantidade = Number(input.question("Quantas notas deseja cadastrar? "));
let soma = 0; 
for (let i = 1; i <= quantidade; i++) {
  let nota = Number(input.question(`Digite a ${i} nota: `));
  soma += nota; 
}

let media = soma / quantidade;
 
console.log(`\nMédia do aluno: ${media.toFixed(2)}`);
 
if (media >= 6) {
  console.log("Resultado: Aprovado");
} else {
  console.log("Resultado: Reprovado");
}