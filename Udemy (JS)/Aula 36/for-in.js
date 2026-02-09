// for...in -> Lê indices (em arrays) ou chaves (em objetos)

const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++){
//     console.log(`A fruta é: ${frutas[i]}`)
//     // for normal: voce controla inicio, parada e incremento do indice
//     // Melhor para arrays quando precisa de controle total do indice
// }

for (let i in frutas){
    console.log(frutas[i])
    // for...in: "i" e o indice (chave) do array
    // Em arrays, pode percorrer indices extras se o array tiver propriedades
}

console.log("--------------------------");

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Santos',
    idade: 22
}

for (let chave in pessoa){
    // Para mostrar cada chave:
    console.log(chave)
    // Para mostrar uma chave específica:
    console.log(pessoa['nome'])
    // Para mostrar o objeto e seu valor:
    console.log(chave, pessoa[chave]);
}
