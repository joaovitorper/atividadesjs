const nomePokemon = document.getElementById("pokemon-name");
const imagemPokemon = document.getElementById("pokemon-image");

const tipoPokemon = document.getElementById("pokemon-type");
const listaAtaques = document.getElementById("attacks-list");

const btn1 = document.getElementById("btn-pokemon-1");
const btn2 = document.getElementById("btn-pokemon-2");
const btn3 = document.getElementById("btn-pokemon-3");

const card = document.querySelector(".pokemon-card");
const imageArea = document.querySelector(".pokemon-image");
const body = document.body;


function pikachu() {
    nomePokemon.textContent = "Pikachu";
    imagemPokemon.setAttribute("src", "imagens/pikachu.png");

    tipoPokemon.textContent = "Tipo: Elétrico";
    listaAtaques.innerHTML = `
        <li>Choque do Trovão</li>
        <li>Ataque Rápido</li>
        <li>Investida Elétrica</li>
    `;


    body.style.backgroundColor = "#045526ff";
    card.style.backgroundColor = "#07923dff";
    imageArea.style.backgroundColor = "#097c09ff";
}


function chamander() {
    nomePokemon.textContent = "Charmander";
    imagemPokemon.setAttribute("src", "imagens/charmander.png");

    tipoPokemon.textContent = "Tipo: Fogo";
    listaAtaques.innerHTML = `
        <li>Lança-chamas</li>
        <li>Garra de Fogo</li>
        <li>Investida</li>
    `;

    
    body.style.backgroundColor = "#ff7a00";
    card.style.backgroundColor = "#ff8f33";
    imageArea.style.backgroundColor = "#ffa65c";
}


function squirtle() {
    nomePokemon.textContent = "Squirtle";
    imagemPokemon.setAttribute("src", "imagens/Squirtle.png");

    tipoPokemon.textContent = "Tipo: Água";
    listaAtaques.innerHTML = `
        <li>Jato d'Água</li>
        <li>Bolhas</li>
        <li>Cauda de Água</li>
    `;

   
    body.style.backgroundColor = "#3da4ff";
    card.style.backgroundColor = "#6bbaff";
    imageArea.style.backgroundColor = "#8bcaff";
}

btn1.addEventListener("click", pikachu);
btn2.addEventListener("click", chamander);
btn3.addEventListener("click", squirtle);
