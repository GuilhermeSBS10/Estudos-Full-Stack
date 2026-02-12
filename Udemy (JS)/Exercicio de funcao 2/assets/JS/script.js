// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 ou 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números 0 a 100

let paragrafo = document.querySelector('#resposta');

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    const num = Number(document.querySelector('#inputNumero').value);

    function verificarDivisaoPor3ePor5 (num){
        if (isNaN(num) || num < 0 || num > 100) {
            paragrafo.textContent = 'Dígito inválido, digite um número válido e dentro do intervalo (0 - 100)';
            return;
        }
        
        if (num % 3 === 0 && num % 5 === 0) {
            paragrafo.textContent = 'FizzBuzz';
        } else if (num % 3 === 0) {
            paragrafo.textContent = 'Fizz';
        } else if (num % 5 === 0){
            paragrafo.textContent = 'Buzz';
        } else {
            paragrafo.textContent = `Não é divisível nem por 3 nem por 5, esse é o número: ${num}\n (Divisão por 3: ${num/3})\n (Divisão por 5: ${num/5})`;
        }
    }
    
    verificarDivisaoPor3ePor5(num);

})
