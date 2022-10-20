let resultado = '';
const numeroDoUsuario = Number(prompt(`Informe o número referente a sua jogada: \n\n1 - Pedra\n2 - Papel\n3 - Tesoura` ));
const numeroCPU = Math.floor((3 * Math.random()) + 1);
const divElement = document.getElementById('resultado');
const jogadas = {
    1: 'Pedra',
    2: 'Papel',
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
        resultado = (numeroCPU === 1) ? 'Deu empate!' : (numeroCPU === 2) ? 'Você perdeu!' : 'Você ganhou!';
        imprimirResultado();
        break;
    }
    case 2: {
        resultado = (numeroCPU === 1) ? 'Você ganhou!' : (numeroCPU === 2) ? 'Deu empate!' : 'Você perdeu!';
        imprimirResultado();
        break;
    }
    case 3: {
        resultado = (numeroCPU === 1) ? 'Você perdeu!' : (numeroCPU === 2) ? 'Você ganhou!' : 'Empate';
        imprimirResultado();
        break;
    }
    default: {
        divElement.innerHTML = 'Número informado é inválido';
    }
}
