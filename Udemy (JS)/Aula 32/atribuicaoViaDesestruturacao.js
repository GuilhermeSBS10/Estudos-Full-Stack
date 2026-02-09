/* ********** ARRAYS ********** */

// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a]; // A B C
// [a, b, c] = letras; // atribuicao via desestruturacao

// console.log(a, b, c); // A B C

//               0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);
console.log(tres);

const numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiro, ,terceiro, ,quinto, ,setimo] = numeros2;
console.log(primeiro, terceiro, quinto);


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros3[1][2]);

// pode ser esse aqui
// const [, [, , seis]] = numeros3;
// console.log(seis);

// OU

const [lista1, lista2, lista3] = numeros3;
console.log(lista2[2]);

