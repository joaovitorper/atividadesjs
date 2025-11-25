const campo = document.getElementById("campo");
campo.addEventListener("keydown", function(evento){
    console.log(`Tecla pressionada: ${evento.key}`);
});