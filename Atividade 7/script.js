let resultado = '';
const numeroDoUsuario = Number(prompt(`Informe o número referente a sua jogada: \n\n1 - Pedra\n2 - Papél\n3 - Tesoura` ));
const numeroCPU = Math.floor((3 * Math.random()) + 1);
const divElement = document.getElementById('resultado');
const jogadas = {
    1: 'Pedra',
    2: 'Papél',
    3: 'Tesoura'
};

function imprimirResultado () {
    divElement.innerHTML = `
        <b>Você</b>: ${jogadas[numeroDoUsuario]} <br>
        <b>CPU</b>: ${jogadas[numeroCPU]} <br><br>
        <b>Resultado</b>: ${resultado}
    `;
}

switch (numeroDoUsuario) {
    case 1: {
        resultado = (numeroCPU === 1) ? 'Empate' : (numeroCPU === 2) ? 'Derrota' : 'Vitória';
        imprimirResultado();
        break;
    }
    case 2: {
        resultado = (numeroCPU === 1) ? 'Vitória' : (numeroCPU === 2) ? 'Empate' : 'Derrota';
        imprimirResultado();
        break;
    }
    case 3: {
        resultado = (numeroCPU === 1) ? 'Derrota' : (numeroCPU === 2) ? 'Vitória' : 'Empate';
        imprimirResultado();
        break;
    }
    default: {
        divElement.innerHTML = 'Número informado é inválido';
    }
}
