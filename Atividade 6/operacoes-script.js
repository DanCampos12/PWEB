let numeros = ['0', '0'];
let divElement;

for (let x = 0; x < 2; x++) {
  numeros[x] = prompt(`Informe o ${x + 1}º número: `);
}

divElement = document.getElementById('resultado');
numeros = numeros.map((nota) => Number(nota));
const soma = (numeros[0] + numeros[1]).toFixed(2).replace('.', ',');
const subtracao = (numeros[0] - numeros[1]).toFixed(2).replace('.', ',');
const produto = (numeros[0] * numeros[1]).toFixed(2).replace('.', ',');
const divisao = (numeros[0] / numeros[1]).toFixed(2).replace('.', ',');
const resto = (numeros[0] % numeros[1]).toFixed(2).replace('.', ',');
divElement.innerHTML = `
  A soma é: ${soma} <br>
  A subtração é: ${subtracao} <br>
  O produto é: ${produto} <br>
  A divisão é: ${divisao} <br>
  O resto inteiro é: ${resto} <br>
`;
