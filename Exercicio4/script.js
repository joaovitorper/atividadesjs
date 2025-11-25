const botao = document.getElementById("meubotao");
botao.addEventListener("mouseover", () =>{
    botao.style.backgroundColor = "lightgreen";
});
botao.addEventListener("mouseout",()=> {
    botao.style.backgroundColor = "";
});