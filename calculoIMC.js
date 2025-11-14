let input = require("readline-sync");


function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2);
    return imc;
}


function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}


let peso = input.questionFloat("Digite seu peso (kg): ");
let altura = input.questionFloat("Digite sua altura (m): ");

let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC(imc);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
