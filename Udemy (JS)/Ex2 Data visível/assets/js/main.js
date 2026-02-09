function verDataAtual() {
    function verDiaSemana() {
        const dataAtual = new Date();
        let diaSemana;

        switch (dataAtual.getDay()) {
            case 0:
                diaSemana = 'Domingo';
                return diaSemana;
            case 1:
                diaSemana = 'Segunda-feira';
                return diaSemana;
            case 2:
                diaSemana = 'Terça-feira';
                return diaSemana;
            case 3:
                diaSemana = 'Quarta-feira';
                return diaSemana;
            case 4:
                diaSemana = 'Quinta-feira';
                return diaSemana;
            case 5:
                diaSemana = 'Sexta-feira';
                return diaSemana;
            case 6:
                diaSemana = 'Sábado';
                return diaSemana;
            default:
                diaSemana = 'Dia inválido';
                return diaSemana;
        }
    }

    function verMesAtual() {
        const dataAtual = new Date();
        let diaMes;

        switch (dataAtual.getMonth()) {
            case 0:
                diaMes = 'Janeiro';
                return diaMes;
            case 1:
                diaMes = 'Fevereiro';
                return diaMes;
            case 2:
                diaMes = 'Março';
                return diaMes;
            case 3:
                diaMes = 'Abril';
                return diaMes;
            case 4:
                diaMes = 'Maio';
                return diaMes;
            case 5:
                diaMes = 'Junho';
                return diaMes;
            case 6:
                diaMes = 'Julho';
                return diaMes;
            case 7:
                diaMes = 'Agosto';
                return diaMes;
            case 8:
                diaMes = 'Setembro';
                return diaMes;
            case 9:
                diaMes = 'Outubro';
                return diaMes;
            case 10:
                diaMes = 'Novembro';
                return diaMes;
            case 11:
                diaMes = 'Dezembro';
                return diaMes;
            default:
                diaMes = 'Mês inválido';
                return diaMes;
        }
    }
    
    const dataAtual = new Date();
    const respostaData = document.getElementById('respostaData');
    const diaSemana = verDiaSemana();
    const mesAtual = verMesAtual();
    respostaData.textContent = `Hoje é ${diaSemana}, ${dataAtual.getDate()} de ${mesAtual} de ${dataAtual.getFullYear()}.`;
    const p = document.querySelector('#respostaData'); // Seleciona o parágrafo pelo ID
    p.style.display = 'block'; // Torna o parágrafo visível
}

document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    verDataAtual();
});

