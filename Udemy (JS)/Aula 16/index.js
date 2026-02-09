//            012345678910
const nome = 'Luiz Otavio'

//               0.      1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)
console.log(alunos[0])
console.log(alunos[2])

alunos[0] = 'Eduardo';
console.log(alunos)

alunos[3] = 'Luana';
alunos[alunos.length] = 'Luiza'; // adiciona um novo elemento no final do array
alunos.push('Fábio', 'Guilherme'); // método para adicionar um novo elemento no final do array (a diferença é que esse método pode adicionar vários elementos de uma vez)
console.log(alunos)

alunos.unshift('Carla'); // adiciona um elemento no início do array
console.log(alunos)

const removido = alunos.pop(); // remove o último elemento do array
console.log(removido)
console.log(alunos)

const removidoInicio = alunos.shift(); // remove o primeiro elemento do array
console.log(removidoInicio)
console.log(alunos)

console.log(alunos.length) // tamanho do array

console.log(alunos.slice(0, 3)) // fatiar o array (do índice 0 ao 2, o 3 não é incluído)
console.log(alunos.slice(1, 4)) // fatiar o array (do índice 1 ao 3, o 4 não é incluído)
console.log(alunos.slice(-1)) // último elemento
console.log(alunos.slice(-3)) // últimos três elementos

delete alunos[1]; // deleta o elemento no índice 1, mas mantém o índice (deixa um "buraco" no array)
console.log(alunos)

alunos.splice(1, 2, 'Elemento1', 'Elemento2'); 
// a partir do índice 1, remove 2 elementos e adiciona 'Elemento1' e 'Elemento2' no lugar
console.log(alunos)

const novosAlunos = alunos.slice(0, 3); // cria um novo array com os elementos do índice 0 ao 2
console.log(novosAlunos)