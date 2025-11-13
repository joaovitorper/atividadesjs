const input = require("readline-sync")

let nome = input.question("Digite seu nome: ");
let idade = Number(input.question("Digite seu idade: "))
console.log("Olá, " + nome );
console.log ("daqui 40 anos voce tera :", idade + 40);