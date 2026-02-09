function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    let contador = 1;

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        const p = document.createElement("p");
        p.textContent = `Pessoa ${contador}: ${nome.value} ${sobrenome.value}, ${peso.value}kg, ${altura.value}cm.`;

        resultado.appendChild(p);
        contador++;

        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
