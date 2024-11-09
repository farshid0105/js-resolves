const N=40;
let count=0;
let sum=0;
console.log('4times' + N +':');
for (let i = 4; i<=N; i+=4) {
    if (N%i===0) {
        console.log(i);
        count++;
        sum+=i;
               
    }    
}
console.log('4times numbers:',count);
console.log('4timesSum:',sum);

