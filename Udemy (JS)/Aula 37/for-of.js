// FOR OF -> Pega o valor da string ou array, diferentemente do FOR IN que pega
// o índece.

const nome = 'Guilherme Santos';
const nomes = ['Guilherme', 'Antunes', 'Lucas', 'Ronald'];

// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for(let i in nome){
//     console.log(nome[i]);
// }

/* for (let valor of nome){
    console.log(valor);
}

for (let valor of nomes){
    console.log(valor);
} */

nomes.forEach(function(elemento, indice){
    console.log(elemento, indice)
})
