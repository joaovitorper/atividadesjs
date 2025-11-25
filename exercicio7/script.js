const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");
botao.addEventListener("click", function () {
titulo.innerText = "O texto foi alterado!";
 titulo.style.color = "blue";

descricao.innerText = "Agora o título e o texto foram modificados pelo JavaScript.";
descricao.style.color = "green";
});
