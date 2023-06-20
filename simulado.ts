class contaBanco { 
    private balance: number;


    constructor(valorInicial: number){
        this.balance = valorInicial
    }

    deposit(quantia: number) {
        this.balance += quantia
    }

    withdraw(quantia: number) {
        if(quantia <= this.balance) {
            this.balance -= quantia
        }
        else{ 
            console.log("Saldo insuficiente")
        }
    }

    checarSaldo(){
        console.log("Seu saldo é: ", this.balance)
    }
}


const acount = new contaBanco(2000)


acount.deposit(300)
acount.checarSaldo()

acount.withdraw(600)
acount.checarSaldo()