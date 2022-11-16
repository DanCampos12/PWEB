const divElement = document.getElementById('resultado');

class Retangulo {
    x;
    y;
    area;

    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.area = x * y; 
    }

    getX () {
        return this.x;
    }

    getY () {
        return this.y;
    }

    getArea () {
        return this.area;
    }
}

class Conta {
    nomeCorrentista; 
    banco; 
    numeroDaConta;
    saldo;

    setNomeCorrentista (value) {
        this.nomeCorrentista =  value;
    }

    getNomeCorrentista () {
        return this.nomeCorrentista;
    }

    setBanco (value) {
        this.banco =  value;
    }

    getBanco () {
        return this.banco;
    }

    setNumeroDaConta (value) {
        this.numeroDaConta =  value;
    }

    getNumeroDaConta () {
        return this.numeroDaConta;
    }

    setSaldo (value) {
        this.saldo =  value;
    }

    getSaldo () {
        return this.saldo;
    }
}

class ContaCorrente extends Conta {
    saldoEspecial;

    setSaldoEspecial (value) {
        this.saldoEspecial =  value;
    }

    getSaldoEspecial () {
        return this.saldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    juros;
    dataVencimento;

    setJuros (value) {
        this.juros =  value;
    }

    getJuros () {
        return this.juros;
    }

    setDataVencimento (value) {
        this.dataVencimento =  value;
    }

    getDataVencimento () {
        return this.dataVencimento;
    }
}

const retangulo = new Retangulo(5, 10)

const contaCorrente = new ContaCorrente()
contaCorrente.setNomeCorrentista('Carlos Daniel')
contaCorrente.setBanco('Banco do Brasil')
contaCorrente.setNumeroDaConta('312')
contaCorrente.setSaldo(32165)
contaCorrente.setSaldoEspecial(311)

const contaPoupanca = new ContaPoupanca()
contaPoupanca.setNomeCorrentista('Maria das Graças')
contaPoupanca.setBanco('Bradesco')
contaPoupanca.setNumeroDaConta('2132')
contaPoupanca.setSaldo(352131)
contaPoupanca.setJuros(5)
contaPoupanca.setDataVencimento('12/2027')

divElement.innerHTML = `
    Resultados obtidos (Retângulo): <br>
    Lado X: <b>${retangulo.getX()}</b>. <br>
    Lado Y: <b>${retangulo.getY()}</b>. <br>
    Área: <b>${retangulo.getArea()}</b>. <br><br>

    Resultados obtidos (Conta Corrente): <br>
    Nome Correntista: <b>${contaCorrente.getNomeCorrentista()}</b>. <br>
    Banco: <b>${contaCorrente.getBanco()}</b>. <br>
    Número da Conta: <b>${contaCorrente.getNumeroDaConta()}</b>. <br>
    Saldo: <b>${contaCorrente.getSaldo()}</b>. <br>
    Saldo Especial: <b>${contaCorrente.getSaldoEspecial()}</b>. <br><br>

    Resultados obtidos (Conta Poupança): <br>
    Nome Correntista: <b>${contaPoupanca.getNomeCorrentista()}</b>. <br>
    Banco: <b>${contaPoupanca.getBanco()}</b>. <br>
    Número da Conta: <b>${contaPoupanca.getNumeroDaConta()}</b>. <br>
    Saldo: <b>${contaPoupanca.getSaldo()}</b>. <br>
    Juros: <b>${contaPoupanca.getJuros()}%</b>. <br>
    Data de Vencimento: <b>${contaPoupanca.getDataVencimento()}</b>.
`;