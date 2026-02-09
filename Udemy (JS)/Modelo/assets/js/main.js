function verDataAtual() {
    const dataAtual = new Date();
    const respostaData = document.getElementById('respostaData');
    respostaData.textContent = `Data atual: ${dataAtual.toLocaleDateString()}`;
    const p = document.querySelector('#respostaData'); // Seleciona o parágrafo pelo ID
    p.style.display = 'block'; // Torna o parágrafo visível
}

document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    verDataAtual();
});