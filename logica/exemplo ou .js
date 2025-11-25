const input = require("readline-sync");

let idade = Number(input.question("Digite sua idade: "));
let estudante = input.question("Você é estudante? (sim/nao): ");

if (idade >= 60 || estudante === "sim") {
    console.log("Desconto aplicado!");
} else {
    console.log("Sem desconto.");
}
 