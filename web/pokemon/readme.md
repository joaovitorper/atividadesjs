# Atividade de Manipulação do DOM - Pokémon Cards

## Descrição
Esta atividade prática tem como objetivo exercitar a manipulação do DOM (Document Object Model) usando JavaScript. Você trabalhará com um card de Pokémon que mudará suas características dependendo do botão clicado.

## Instruções

### Estrutura do Projeto
- `index.html` - Contém a estrutura HTML da página
- `style.css` - Contém todos os estilos necessários
- `script.js` - Arquivo onde você implementará a lógica JavaScript
- `images/` - Pasta com as imagens dos Pokémon

### Requisitos
Você deverá implementar a lógica no arquivo `script.js` para que quando o usuário clicar em cada um dos botões, o card exiba o Pokémon correspondente com suas características:

1. **Botão "Pikachu"**
   - Exibir a imagem do Pikachu
   - Nome: Pikachu
   - Tipo: Elétrico
   - Ataques: "Choque do Trovão", "Ataque Rápido", "Investida Elétrica"

2. **Botão "Charmander"**
   - Exibir a imagem do Charmander
   - Nome: Charmander
   - Tipo: Fogo

   - Ataques: "Lança-chamas", "Garra de Fogo", "Investida"

3. **Botão "Squirtle"**
   - Exibir a imagem do Squirtle
   - Nome: Squirtle
   - Tipo: Água
   - Ataques: "Jato d'Água", "Bolhas", "Cauda de Água"

### Passos Sugeridos
1. Selecione os elementos do DOM que precisarão ser manipulados
3. Para cada botão, implemente uma função que:
   - Atualize a imagem do Pokémon
   - Atualize o nome e tipo
   - Remova a classe CSS anterior e adicione a nova
   - Atualize a lista de ataques

### Dicas
- Use `document.getElementById()` para selecionar elementos pelo ID
- Para atualizar o conteúdo de texto, use a propriedade `innerText`
- Para atualizar a imagem, mude a propriedade `src` do elemento img
- Para atualizar a lista de ataques, você pode usar `innerHTML`


