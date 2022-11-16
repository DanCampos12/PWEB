const divElement = document.getElementById('resultado');
const numbers = [];

for (let x = 0; x < 3; x++) {
    numbers.push(Number(prompt(`Informe o ${x + 1}º número:`)));
}

function getMaxNumber (firstNumber, secondNumber, thirdNumber) {
    return Math.max.apply(null, [firstNumber, secondNumber, thirdNumber])
};

function getOrderedNumbers (firstNumber, secondNumber, thirdNumber) {
    return [firstNumber, secondNumber, thirdNumber].sort()
}

divElement.innerHTML = `
    Resultados obtidos: <br><br>
    Maior número: <b>${getMaxNumber(numbers[0], numbers[1], numbers[2])}</b>. <br>
    Números Ordenados: <b>${getOrderedNumbers(numbers[0], numbers[1], numbers[2]).join(', ')}</b>.
`;