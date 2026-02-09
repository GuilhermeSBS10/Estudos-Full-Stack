/*

&& -> false && true -> false "O valor mesmo"
|| -> false || true -> true
false e true -> valor literal 
' ', " ", ` ` (FALSY, false, 0 null, underfined, NaN) -> valor que retorna em false

*/

console.log('Guilherme Santos' && 0 && 'Maria') // Retorna o primeiro que der false, por isso aqui seria o "0"
console.log('Guilherme Santos' && true && 'Maria') // Retorna o primeiro que der false, por isso aqui seria o "Maria"

function falaOi() {
    return 'Oi'
}

let vaiExecutar;

console.log(vaiExecutar && falaOi());
