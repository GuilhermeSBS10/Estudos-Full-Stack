// Escreva uma função chamada ePaisagem, que recebe 2 argumentos, largura e altura de uma imagem (number). 
// Retorne true se a imagem estiver no modo paisagem

let paragrafo = document.querySelector('#resposta');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const altura = Number(document.querySelector('#inputAltura').value);
    const largura = Number(document.querySelector('#inputLargura').value);

    function ePaisagem (largura, altura) {
        if (isNaN(largura) || isNaN(altura)) {
            paragrafo.textContent ='Digite um número válido para largura e altura!';
            return;
        } 
        
        if (largura > altura) {
            paragrafo.textContent = 'A imagem está no modo paisagem.';
        } else {
            paragrafo.textContent = 'A imagem não está no modo paisagem.';
        }
    }

    ePaisagem(largura, altura);
});