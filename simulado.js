var contaBanco = /** @class */ (function () {
    function contaBanco(valorInicial) {
        this.balance = valorInicial;
    }
    contaBanco.prototype.deposit = function (quantia) {
        this.balance += quantia;
    };
    contaBanco.prototype.withdraw = function (quantia) {
        if (quantia <= this.balance) {
            this.balance -= quantia;
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    contaBanco.prototype.checarSaldo = function () {
        console.log("Seu saldo é: ", this.balance);
    };
    return contaBanco;
}());
var acount = new contaBanco(2000);
acount.deposit(300);
acount.checarSaldo();
acount.withdraw(600);
acount.checarSaldo();
