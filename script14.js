// function calculateBalance(){
// const name = prompt('Enter you name:');
// let balance = parseFloat(prompt('Enter your account balance:'));
// const transactionCount = parseInt(prompt('Enter your transaction counts:'));

// for(let i=0; i<transactionCount; i++){
//     const transactionType = parseInt(prompt('Transaction type ' + (i+1) + '(1: withdraw 2: deposit:'));
//     const amount = parseFloat(prompt("Transaction amount" + (i+1) + ':'));

//     if (transactionType===1) {
//         balance+= amount;
        
//     } else if (transactionType===2){
//               balance-=amount;  
//     } else {
//         console.log('Please enter 1 or 2. invalid transaction');
        
//     }
// }

// console.log('Final balance' + name + 'is' + balance + Toman);
// }
// calculateBalance();

let person ={
    name:'Farshid Ghobadiha' , balance :1000, transaction :[{type:1, amount:50000},{type:2, amount:6000},{type:2, amount:2000}]

};

function calculateBalance(person){
    let balance = person.balance;
    for(let transaction of person.transaction){
        if (transaction.type===1) {
            balance +=transaction.amount;
                       
        } else {
            balance-=transaction.amount;
        }
    }
return balance;    
}

let finalBalance = calculateBalance(person);
console.log('finalBalance:' + person.name + 'equals:' + finalBalance);
