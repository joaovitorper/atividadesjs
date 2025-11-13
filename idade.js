const input = require("readline-sync");
 
let idade = Number(input.question("Digite a sua idade: "));
if(idade >= 18) {
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade.")
}