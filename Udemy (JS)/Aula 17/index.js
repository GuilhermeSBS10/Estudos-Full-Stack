
function saudacao(nome){
 console.log('Bom dia', nome)
    
 return 'Guilherme'
}
const nomee = 'Santos';

saudacao(nomee); // Ele está subentendendo que eu quero passar o valor da variável nomee para a função saudacao

saudacao('santos') // Estou executando diretamente a função saudacao passando o valor 'santos', por isso não é impresso o underfined, visto que tem um console.log dentro da função.

const variavel = saudacao('Santos'); // Aqui eu estou armazenando o valor retornado pela função saudacao na variável 'variavel'
console.log(variavel) // Aqui eu estou imprimindo o valor armazenado na variável 'variavel', que é o valor retornado pela função saudacao.\

console.log('============================================');

function soma (x = 1, y = 1){ // Valores padrão para x e y (caso não sejam fornecidos)
    const resultado = x + y;
    return resultado;
    console.log('Isso não será executado'); // Qualquer código após o return não será executado
}

let n1 = 4;
let n2 = 5;
const resultadoFinal = soma(n1, n2);

console.log(soma(n1, n2));
console.log(resultadoFinal);
console.log(soma()); // Usando os valores padrão
console.log(soma(10)); // y usará o valor padrão 1

console.log('============================================');

const raiz = function(n){ // Função anônima atribuída a uma variável
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log('============================================');

const raiz2 = (n) => n ** 0.5; // Função arrow (função de seta)

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));

console.log('============================================');
