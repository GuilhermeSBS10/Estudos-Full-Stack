// const nome = 'Guilherme';
// let i = 0;

// while (i <= nome.length - 1) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('Segue a vida...');

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

// O while Verifica a Condição e Depois Executa.
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('#############');

// O do Execulta e Depois Verifica a Condição. (Pelo Menos Uma Vez);
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

// Diferença entre While e For: O for é mais utilizado quando sabemos o número de vezes que o código deve ser executado, 
// já o while é mais utilizado quando não sabemos o número de vezes que o código deve ser executado.