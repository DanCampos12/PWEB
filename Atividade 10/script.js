const divElement = document.getElementById('resultado');
const alunos = [];

class Aluno {
    name;
    RA; 

    setName (value) {
        this.name = value;
    }

    setRA (value) {
        this.RA = value;
    }
    
    setValueByKey (key, value) {
        this[key] = value;
    }

    getName () {
        return this.name;
    }

    getRA () {
        return this.RA;
    }
};

for (let x = 0; x < 3; x++) alunos.push(new Aluno());
alunos[0].name = prompt('Informe o nome do 1º aluno:');
alunos[0].RA = prompt('Informe o RA do 1º aluno:');
alunos[1].setName(prompt('Informe o nome do 2º aluno:'));
alunos[1].setRA(prompt('Informe o RA do 2º aluno:'));
alunos[2].setValueByKey('name', prompt('Informe o nome do 3º aluno:'));
alunos[2].setValueByKey('RA', prompt('Informe o RA do 3º aluno:'));

divElement.innerHTML = `
    Resultados obtidos: <br><br>
    Nome do 1º Aluno: <b>${alunos[0].getName()}</b>. <br>
    RA do 1º Aluno: <b>${alunos[0].getRA()}</b>. <br><br>
    Nome do 2º Aluno: <b>${alunos[1].getName()}</b>. <br>
    RA do 2º Aluno: <b>${alunos[1].getRA()}</b>. <br><br>
    Nome do 3º Aluno: <b>${alunos[2].getName()}</b>. <br>
    RA do 3º Aluno: <b>${alunos[2].getRA()}</b>.
`;