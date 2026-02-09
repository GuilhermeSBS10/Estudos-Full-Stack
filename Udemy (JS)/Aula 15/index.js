let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para baixo
let num3 = Math.ceil(num1);  // Arredonda para cima
let num4 = Math.round(num1); // Arredonda para o mais próximo
let num5 = 9;

console.log(`Número original: ${num1}`);
console.log(`Arredondado para baixo (Math.floor): ${num2}`);
console.log(`Arredondado para cima (Math.ceil): ${num3}`);
console.log(`Arredondado para o mais próximo (Math.round): ${num4}`);
console.log(Math.max(5, 10, 15, 2, 8)); // Retorna o maior número
console.log(Math.min(5, 10, 15, 2, 8)); // Retorna o menor número
console.log(Math.random()); // Gera um número aleatório entre 0 e 1
console.log((Math.random() * 100).toFixed(2)); // Gera um número aleatório entre 0 e 100 com 2 casas decimais
console.log(Math.round(Math.random() * 100).toFixed(2)); // Gera um número aleatório entre 0 e 100 arredondado
console.log(Math.sqrt(num5)); // Retorna a raiz quadrada da variável num5