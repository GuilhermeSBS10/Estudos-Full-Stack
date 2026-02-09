let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const varTemp = varA; // Armazena o valor de A em uma variável temporária

varA = varB;
varB = varC;
varC = varTemp; // Atribui o valor armazenado na variável temporária para C

/*
 ou
 [varA, varB, varC] = [varB, varC, varA]
 */

console.log(varA, varB, varC) // A B C

