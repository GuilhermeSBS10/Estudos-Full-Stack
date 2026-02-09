//  (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
 
const pontoUsuario = 1000;
const nivelUsuario = pontoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Comum';
console.log(nivelUsuario);

const corUsuario = `Pink`;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

// Equivalente a:

// if (pontoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Comum');
// }
