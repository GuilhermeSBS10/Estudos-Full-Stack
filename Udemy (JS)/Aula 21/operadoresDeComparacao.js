/*

Operadores de comparação:

>  maior que
>= maior ou igual a
<  menor que
<= menor ou igual a
== igual a (valor) diferente de (= atribuição)
=== igual a (valor e tipo) 
!= diferente de (valor)
!== diferente de (valor e tipo)

*/

// Aula sobre:

const num1 = 10;
const num2 = 5;

console.log(num1 > num2);  // true
console.log(num1 >= num2); // true
console.log(num1 < num2);  // false
console.log(num1 <= num2); // false
console.log(num1 == '10'); // true
console.log(num1 === '10'); // false
console.log(num1 != num2); // true
console.log(num1 !== '10'); // true 

const texto1 = 'Alura';
const texto2 = 'alura';

console.log(texto1 === texto2); // false
console.log(texto1 > texto2); // false (A maiúscula vem antes da minúscula na tabela Unicode)
console.log(texto1 < texto2); // true
console.log(texto1 != texto2); // true
console.log(texto1 !== texto2); // true
console.log(texto1 == 'Alura'); // true
console.log(texto1 === 'Alura'); // true