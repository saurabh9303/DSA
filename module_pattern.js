// Module pattern and Reviling module pattern 

let Bank = (function (){
    let Balance = 12000;

    function checkBalance (){
        console.log(Balance);
    }

    function withdrowBalance (amount){
        if(amount<=Balance){
            Balance-=amount
        }
        console.log(Balance)
    }
    
    function addBalance(value){
        Balance += value
    }
     
    return {
        add : addBalance,
        check : checkBalance,
        withdrow : withdrowBalance
    }

})()

// console.log(Bank.checkBalance())