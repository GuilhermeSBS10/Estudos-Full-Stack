function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const form = document.querySelector('form');
const resposta = document.getElementById('resposta');
const numerosSorteados = document.getElementById('numerosSorteados');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const min = Number(document.getElementById('input-teste-1').value);
    const max = Number(document.getElementById('input-teste-2').value);
    const nSorteada = Number(document.getElementById('input-teste-numero').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        resposta.textContent = 'Valores inválidos.';
        return;
    }

    // Garante que 10 esteja no intervalo para evitar loop infinito e corrige referências de variáveis/elementos.
    if (min > nSorteada || max < nSorteada) {
        resposta.textContent = `O número a ser sorteado deve estar entre ${min} e ${max}.`;
        return;
    }

    let rand;
    let tentativas = 0;
    const historico = [];

    while (rand !== nSorteada) {
        rand = random(min, max);
        historico.push(rand);
        numerosSorteados.textContent = `Os números sorteados antes foram: ${historico.join(', ')}`;
        tentativas++;
    }

    resposta.textContent = `
        Número final: ${rand}
        | Tentativas: ${tentativas}
    `;
});
