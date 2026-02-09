function getDiaSemanaTexto(diaSemana){
    switch (diaSemana){
        case 0: 
            return `Hoje é Domingo`;
        case 1:
            return `Hoje é Segunda`;
        case 2:
            return `Hoje é Terça`;
        case 3:
            return `Hoje é Quarta`;
        case 4:
            return `Hoje é Quinta`;
        case 5:
            return `Hoje é Sexta`;
        case 6:
            return `Hoje é Sábado`;
        default:
            return `Dia inválido`;
    }
}

// switch (diaSemana){
//     case 1: 
//         console.log(`Hoje é Segunda`);
//         break;
//     case 2:
//         console.log (`Hoje é Terça`)
//         break;
//     case 3:
//         console.log (`Hoje é Quarta`)
//         break;
//     case 4:
//         console.log (`Hoje é Quinta`)
//         break;
//     case 5:
//         console.log (`Hoje é Sexta`)
//         break;
//     case 6:
//         console.log (`Hoje é Sábado`)
//         break;
//     case 7:
//         console.log (`Hoje é Domingo`)
//         break;
//     default:
//         console.log (`Dia inválido`)
// }

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);
