// Array de objetos que define O QUE será criado no HTML
// Cada objeto tem:
// - tag: o nome da tag HTML que será criada
// - texto: o texto que vai dentro dessa tag
const elementos = [
    { tag: 'p', texto: 'Esse é o PARÁGRAFO' },
    { tag: 'div', texto: 'Esse é a DIV' },
    { tag: 'section', texto: 'Esse é o SECTION' },
    { tag: 'footer', texto: 'Esse é o FOOTER' },
];

// Seleciona no HTML o elemento que já existe
// No seu HTML: <section class="container">
const container = document.querySelector('.container');

// Cria uma div vazia (ainda NÃO aparece na tela)
// Ela vai servir como "caixa" para guardar as tags criadas
const div = document.createElement('div');

// Loop que percorre todo o array elementos
// i começa em 0 e vai até o último índice do array
for (let i = 0; i < elementos.length; i++) {

    // Desestruturação do objeto atual do array
    // É o mesmo que fazer:
    // let tag = elementos[i].tag
    // let texto = elementos[i].texto
    const { tag, texto } = elementos[i];

    // Cria uma nova tag HTML dinamicamente
    // Exemplo:
    // se tag = 'p' → cria <p></p>
    // se tag = 'div' → cria <div></div>
    const tagCriada = document.createElement(tag);

    // Coloca o texto dentro da tag criada
    tagCriada.innerHTML = texto;

    // Adiciona a tag criada dentro da div "pai"
    // Até aqui ainda NÃO aparece no HTML
    div.appendChild(tagCriada);
}

// Agora sim:
// adiciona a div (com todas as tags dentro)
// dentro da section.container
// A partir daqui o conteúdo aparece na tela
container.appendChild(div);
