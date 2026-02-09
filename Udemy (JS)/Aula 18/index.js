const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Santos',
    idade: 22,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


/* 
const array = [1,2,3];
array.push(4);
array[0] = 'Guilherme'
// array = 'Outra';  (Não pode fazer isso.)

const pessoa1 = {
    nome: 'Guilherme',
    sobrenome: 'Santos',
    idade: 22
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 28
}

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.nome = 'João';
console.log(pessoa1.nome); */