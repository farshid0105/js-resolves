// let N=123;
// let sum=0;

// while (N>0){
//     sum+=N%10;
//     N=Math.floor(N/10);
// }

// if(N%sum===0){
//     console.log("Yes");
    
// }else{
//     console.log("No");
    
// }


function dividableToSum(N){
    let sum=0;
    let temp=N;

    while (temp>0){
        sum+= temp%10;
        temp=Math.floor(temp/10);
    }
    return N % sum===0;
}
const number=160;
const result = dividableToSum(number);
console.log(result);
