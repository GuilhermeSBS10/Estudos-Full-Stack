// Para começar, existem muitas funções relacionadas ao objeto Date que permitem manipular e formatar datas de várias maneiras.
// Não vou conseguir colocar todas aqui, mas vou deixar o link do site que tem varias explicando aqui embaixo:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
// const date = new Date(0 + tresHoras); // 01/01/1970 Timestamp Unix ou época unix
// console.log(date);
// const date2 = new Date(); // Data atual

// Podemos criar uma data específica passando os parâmetros: ano, mês (0-11), dia, hora, minuto, segundo, milissegundo
// const date3 = new Date(2024, 5, 20, 15, 30, 45, 500); // 20 de junho de 2024 às 15:30:45.500
// console.log(date2);
// console.log(date2.toString()); // Data completa em formato de string
// console.log(date2.toDateString()); // Data em formato legível

// const data3 = new Date(2019, 3, 20, 15, 14, 27 , 1000); // No JS o mês começa do 0 (Janeiro) ao 11 (Dezembro)
// console.log(data3.toString());
// console.log('Dia', data3.getDate()); // Retorna o dia do mês (1-31)
// console.log('Mês', data3.getMonth() + 1); // Retorna o mês (0-11), por isso somamos 1
// console.log('Ano', data3.getFullYear()); // Retorna o ano com 4 dígitos
// console.log('Hora', data3.getHours()); // Retorna a hora (0-23)
// console.log('Minutos', data3.getMinutes()); // Retorna os minutos (0-59)
// console.log('Segundos', data3.getSeconds()); // Retorna os segundos (0-59)
// console.log('Milissegundos', data3.getMilliseconds()); // Retorna os milissegundos (0-999)
// console.log('Dia da semana', data3.getDay()); // Retorna o dia da semana (0-6) 0 = Domingo, 1 = Segunda, ..., 6 = Sábado


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // Adiciona 1 porque os meses começam do 0
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;

}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);