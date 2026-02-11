const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Usando o For:');
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número');
        continue; // Pula para a próxima interação do loop.
    }

    if (numero === 5) {
        console.log('Pulei o número');
        continue; // Pula para a próxima interação do loop.
    }

    if (numero === 9) {
        console.log('Número 9 encontrado, saindo do loop...');
        break; // Sai do loop completamente.
    }
    console.log(numero);
}

console.log('#############');
console.log('Usando o While:');

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número');
        i++; // Incrementa o contador para evitar um loop infinito.
        continue; 
    }

    if (numero === 5) {
        console.log('Pulei o número');
        i++; // Incrementa o contador para evitar um loop infinito.
        continue; 
    }

    if (numero === 9) {
        console.log('Número 9 encontrado, saindo do loop...');
        break; // Sai do loop completamente.
    }
    console.log(numero);
    i++;
}

console.log('#############');
console.log('Usando o Do While:');

i = 0;
do {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número');
        i++; // Incrementa o contador para evitar um loop infinito.
        continue; // Pula para a próxima interação do loop.
    }

    if (numero === 5) {
        console.log('Pulei o número');
        i++; // Incrementa o contador para evitar um loop infinito.
        continue; // Pula para a próxima interação do loop.
    }

    if (numero === 9) {
        console.log('Número 9 encontrado, saindo do loop...');
        break; // Sai do loop completamente.
    }
    console.log(numero);
    i++;
} while (i < numeros.length);
