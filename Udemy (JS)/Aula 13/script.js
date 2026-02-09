let primeiraString = "primeira string" 
console.log(primeiraString) // Explicação: o texto será exibido exatamente como está entre as aspas

let segundaString = 'segunda \string'
console.log(segundaString) // Explicação: o \ antes do t serve para "escapar" o caractere, ou seja, ele não será interpretado como parte do texto, mas sim como um caractere especial (neste caso, o caractere de nova linha).

//                    0123456789...         Índices das letras na string
let terceiraString = `terceira string`
console.log(terceiraString[8]) // Explicação: o índice 8 corresponde à letra "a" na string "terceira string"

console.log(terceiraString.charAt(8)) // Explicação: o método charAt() retorna o caractere na posição especificada (neste caso, o índice 8)

console.log(terceiraString.concat(' de verdade')) // Explicação: o método concat() é usado para concatenar (juntar) duas ou mais strings

console.log(terceiraString.indexOf('S', 3)) // Explicação: o método indexOf() retorna o índice da primeira ocorrência do caractere especificado (neste caso, 'S') a partir do índice 3. Se não encontrar, retorna -1

console.log(terceiraString.lastIndexOf('r', 7)) // Explicação: o método lastIndexOf() retorna o índice da última ocorrência do caractere especificado (neste caso, 'r') antes do índice 7. Se não encontrar, retorna -1

console.log(terceiraString.replace('string', 'STRINGS')) // Explicação: o método replace() substitui a primeira ocorrência do texto especificado (neste caso, 'string') pelo novo texto (neste caso, 'STRINGS')

console.log(terceiraString.length) // Explicação: a propriedade length retorna o número total de caracteres na string

console.log(terceiraString.slice(0, 9)) // Explicação: o método slice() extrai uma parte da string, começando no índice 0 e terminando antes do índice 9

console.log(terceiraString.toUpperCase()) // Explicação: o método toUpperCase() converte todos os caracteres da string para maiúsculas

console.log(terceiraString.toLowerCase()) // Explicação: o método toLowerCase() converte todos os caracteres da string para minúsculas

console.log(terceiraString.trim()) // Explicação: o método trim() remove os espaços em branco do início e do fim da string


