/* 
Primitivos (imutáveis): string, number, boolean, undefined
*/

let nome = 'Guilherme';
nome = 'Santos'; // Criou um novo espaço na memória
console.log(nome);

/*
Referência (mutável): array, object, function
*/

const nomes = ['Guilherme', 'Santos'];
nomes.push('Oliveira'); // Não criou um novo espaço na memória, apenas alterou o conteúdo do espaço já existente
console.log(nomes);


