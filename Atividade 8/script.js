const divElement = document.getElementById('resultado');
const PEOPLE_NUMBER = 45;

let people = [];
let count = 0;
do {
    const age = Number(prompt(`Pesquisa sobre o lançamento do filme: \n\nQual a sua idade?`));
    const genre = Number(prompt(`
        Pesquisa sobre o lançamento do filme:\n
        Qual o seu sexo?
        1- Masculino
        2- Feminino
    `));
    const opinion = Number(prompt(`
        Pesquisa sobre o lançamento do filme:\n
        Qual a sua opinião sobre o filme?
        1- Ótimo
        2- Bom
        3- Regular
        4- Péssimo
    `));

    people.push({ age, genre, opinion });
    count++;
} while (count < PEOPLE_NUMBER);

function getAverageAge (ages) {
    return (ages.reduce((acc, cur) => acc + cur, 0) / people.length).toFixed(2).replace('.', ',');
};

function getMaxMinAge (ages) {
    return {
        maxAge: Math.max.apply(null, ages),
        minAge: Math.min.apply(null, ages)
    };
};

function getOpinionCounter (people) {
    return {
        badCount: people.filter((person) => person.opinion === 4).length,
        greatAndGoodCount: people.filter((person) => person.opinion === 1 || person.opinion === 2).length
    };
};

function getGenreCounter (people) {
    return {
        mascCount: people.filter((person) => person.genre === 1).length,
        femCount: people.filter((person) => person.genre === 2).length
    };
};

const ages = people.map((person) => person.age);
const averageAge = getAverageAge(ages);
const { maxAge, minAge } = getMaxMinAge(ages);
const { badCount, greatAndGoodCount } = getOpinionCounter(people);
const greatAndGoodPercentage = `${((greatAndGoodCount * 100) / PEOPLE_NUMBER).toFixed(2).replace('.', ',')}%`
const { mascCount, femCount } = getGenreCounter(people);

divElement.innerHTML = `
    Resultados da pesquisa: <br><br>
    Média de idade das pessoas: <b>${averageAge}</b>. <br>
    Idade da pessoa mais velha: <b>${maxAge}</b>. <br>
    Idade da pessoa mais nova: <b>${minAge}</b>. <br>
    Quantidade de pessoas que responderam péssimo: <b>${badCount}</b>.  <br>
    Porcentagem de pessoas que responderam ótimo e bom: <b>${greatAndGoodPercentage}</b>. <br>
    Número de mulheres: <b>${mascCount}</b>. <br>
    Número de homens: <b>${femCount}</b>. <br>
`;