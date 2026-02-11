// Escreva uma função que recebe 2 numeros e retorne o maior deles, ou faça melhor

function retornaOMaiorValor (a, b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return b
    } else {
        return 'Número inválido';
    }
}

const a = 2;
const b = 5;
const resultado = retornaOMaiorValor;

console.log(resultado);