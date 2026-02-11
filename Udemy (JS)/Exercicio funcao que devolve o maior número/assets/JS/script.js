// Escreva uma função que recebe 2 numeros e retorne o maior deles, ou faça melhor

// function retornaOMaiorValor (a, b){
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b
//     } else {
//         return 'Número inválido';
//     }
// }

// const a = 2;
// const b = 5;
// const resultado = retornaOMaiorValor(a, b);

// console.log(resultado);

// Versão com formulário:
function retornarOMaiorValor(num1, num2) {
    if (num1 > num2) return num1;
    if (num2 > num1) return num2;
    return null; // números iguais
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    const paragrafo = document.querySelector('#paragrafo');

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        paragrafo.innerHTML = 'Digite dois números válidos.';
        return;
    }

    const maior = retornarOMaiorValor(num1, num2);

    if (maior === null) {
        paragrafo.innerHTML = 'Os números são iguais.';
        return;
    }

    paragrafo.innerHTML = `O maior número é: ${maior}`;
});
