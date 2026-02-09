/* ********** OBJETOS ********** */

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Santos',
    idade: 22,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação

/*
    Quando tem uma atribuiçao normal:

    const { nome, sobrenome, idade } = pessoa;
    console.log(nome, sobrenome);
*/


/*
    Quando o a variavel "nome" não existe dentro do objeto pessoa é assim que se faz para não aparecer o underfind:

    const { nome: '', sobrenome, idade } = pessoa;
    console.log(nome, sobrenome);
*/

/*
    Quando eu quero mudar o nome da variavel dentro do objeto (no caso foi mudada de "nome" para "teste"):

    const { nome: teste, sobrenome, idade } = pessoa;
    console.log(teste, sobrenome);
*/

/*
    Estrair a rua e o número da endereco e também o endereco completo:

    const { endereco: { rua, numero }, endereco } = pessoa;
    console.log(rua, numero, endereco);
*/