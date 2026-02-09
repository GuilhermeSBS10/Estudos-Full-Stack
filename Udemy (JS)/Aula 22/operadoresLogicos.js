/*

Operadores Lógicos:

&& -> AND -> E -> Todas as expreções precissão ser verdadeiras para retornar True.
|| -> OR -> OU -> Basta uma ser expreção ser verdadeira a expressão completa retorna True e se todas foram falsas, a expressão por completa retorna False.
! -> NOT -> NÃO -> Nega

*/

const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);
const expressaoOr = true || false;
console.log(expressaoOr);

console.log(!true); // (Negou o true e transformou em false)
console.log(!!true); // (Negou o true e transformou em false e negou novamente transpormando em true de novo)

