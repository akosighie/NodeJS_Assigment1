// NOTE: Monthly installment formula
// run 'npm install' first
// LoanAmount * (1 + (LoanTerm *(InterestRate / 100))) / LoanTerm
// use this command to run -> node main.js --loanTerm=24 --bankName='bpi' --loanAmount=10000


class Bank{

    constructor(loanAmount, interestRate) {
        this.loanAmount = loanAmount;
        this.interestRate = interestRate;
    }

    getMonthlyInstallment  = function(loanTerm) {

       return (this.loanAmount * (1+ (loanTerm * (this.interestRate / 100))) / loanTerm);
    }
    
}

class MetroBank extends Bank{

    constructor(loanAmount, interestRate) {
       super(loanAmount, interestRate);    
    }
}

class Bpi extends Bank{

    constructor(loanAmount, interestRate) {
        super(loanAmount, interestRate);    
     }
}

class Bdo extends Bank{

    constructor(loanAmount, interestRate) {
        super(loanAmount, interestRate);    
     }
}

class LoanCalculator{

    constructor(bankName, loanAmount , loanTerm){
        this.bankName = bankName;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
    }

   getMonthlyInstallment  = () => {

        var computedLoanAmount = 0;


        switch(this.bankName)
        {
            case('metrobank'):
                        const metroBankLoan = new MetroBank(this.loanAmount, 1.5);
                        computedLoanAmount =  metroBankLoan.getMonthlyInstallment(this.loanTerm);          
            break;

            case('bpi'):
                        const bpiLoan = new Bpi(this.loanAmount, 1.2);
                        computedLoanAmount = bpiLoan.getMonthlyInstallment(this.loanTerm);  
            break;

            case('bdo'):
                        const bdoLoan = new Bdo(this.loanAmount, 1.7);
                        computedLoanAmount = bdoLoan.getMonthlyInstallment(this.loanTerm);                      
            break;

        }        
        
        console.log(computedLoanAmount);
      
    }
}


const { argv } = require('yargs');

const {bankName, loanAmount, loanTerm} = argv;


const computedLoan = new LoanCalculator(bankName, loanAmount, loanTerm);
computedLoan.getMonthlyInstallment();
