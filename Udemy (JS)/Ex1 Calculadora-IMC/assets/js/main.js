document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('input-teste-1').value);
    const altura = parseFloat(document.getElementById('input-teste-2').value);

    const resposta = document.querySelector('#resposta');

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        resposta.textContent = 'Digite peso e altura válidos!';
        return;
    }

    const calcularIMC = function() {
        return peso / (altura * altura);
    };

    const imc = calcularIMC();
    let respostaIMC;

    resposta.classList.remove('baixo', 'normal', 'sobrepeso', 'obesidadeI', 'obesidadeII', 'obesidadeIII');

    if (imc < 18.5) {
        respostaIMC = 'Abaixo do peso';
        resposta.classList.add('baixo');
    } else if (imc <= 24.9) {
        respostaIMC = 'Peso normal';
        resposta.classList.add('normal');
    } else if (imc <= 29.9) {
        respostaIMC = 'Sobrepeso';
        resposta.classList.add('sobrepeso');
    } else if (imc <= 34.9) {
        respostaIMC = 'Obesidade grau I';
        resposta.classList.add('obesidadeI');
    } else if (imc <= 39.9) {
        respostaIMC = 'Obesidade grau II';
        resposta.classList.add('obesidadeII');
    } else {
        respostaIMC = 'Obesidade grau III';
        resposta.classList.add('obesidadeIII');
    }

    resposta.textContent =
        `Seu IMC é: ${imc.toFixed(2)} e está ${respostaIMC}`;

});
