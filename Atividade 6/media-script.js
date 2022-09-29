let notas = ['0', '0', '0'];
let divElement;

for (let x = 0; x < 3; x++) {
    notas[x] = prompt(`Informe a ${x + 1}º nota: `);
}

divElement = document.getElementById('resultado');
const somaNotas = notas.map((nota) => Number(nota)).reduce((acc, cur) => acc + cur, 0);
divElement.innerHTML = `O resultado é: ${(somaNotas / 3).toFixed(2).replace('.', ',')}`;
