alert('Oi 👋') // Caixa de alerta, onde aparece uma 

confirm('Tem certeza?') // Caixa de alerta para confirmar usando um valor booleang

prompt('Digite o seu nome:') // Caixa de alerta para o usuário digitar um valor, retornando uma string

const confirmacao = confirm('Deseja realmente apagar?')
console.log(confirmacao) // true ou false

let confirmacao2 = confirm('Deseja realmente apagar?')
console.log(confirmacao2) // true ou false

let nome = prompt('Digite o seu nome:')
console.log(nome) // Retorna o nome digitado pelo usuário

let idade = prompt('Digite a sua idade:')
idade = Number(idade) // Converte a string retornada pelo prompt em número
console.log(idade) // Retorna a idade digitada pelo usuário como número

let num1 = prompt('Digite o primeiro número:')
let num2 = prompt('Digite o segundo número:')

num1 = Number(num1) // Converte a string retornada pelo prompt em número
num2 = Number(num2) // Converte a string retornada pelo prompt em número

const soma = num1 + num2 // Soma os dois números

alert('A soma dos dois números é: ' + soma) // Exibe a soma dos dois números em uma caixa de alerta 