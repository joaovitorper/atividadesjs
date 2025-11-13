const input = require("readline-sync");
 
let nome = input.question("Digite seu nome? ");
let temConviteVIP = input.question("Voce possui convite VIP? (sim/nao): ");
let estaNaLista = input.question("Voce esta na lista de convidados especiais? (sim/nao): ");
 
 
temConviteVIP = temConviteVIP.toLowerCase();
estaNaLista = estaNaLista.toLowerCase();
 
 
if (temConviteVIP === "sim" || estaNaLista === "sim") {
  console.log(` Acesso liberado à área VIP, ${nome}!`);
} else {
  console.log("Acesso negado.");
}
 
