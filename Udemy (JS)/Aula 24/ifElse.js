// If pode ser usado sozinho
// Sempre que usarmos o else, precisamos de um if antes
// Podemos ter vários else if na checagem
// Só podemos ter um else na checagem
// Podemos usar várias condições diferentes na checagem
// Podemos usar condições sem else if, ultilizando apenas if e else

function falaBomDia() {
    return console.log('Bom dia!');
}

function falaBoaNoite() {
    return console.log('Boa noite!');
}

function falaBoaTarde() {
    return console.log('Boa tarde!')
}

/*
Entre 0 - 12 -> Bom dia
Entre 12 - 18 -> Boa tarde
Entre 18 - 24 -> Boa noite
*/
let horarioDoDia = 19;

if (horarioDoDia >= 5 && horarioDoDia < 12) {
    falaBomDia();
} else if (horarioDoDia >= 12 && horarioDoDia <= 18) {
    falaBoaTarde();
} else if (horarioDoDia > 18 && horarioDoDia <= 24) {
    falaBoaNoite();
} else {
    console.log('Horário inválido!');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou ao cinema!');
} else {
    console.log('Fico em casa mesmo.');
}
