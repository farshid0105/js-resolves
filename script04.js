let N=4;
let X=2;
// الف
let P=0;
for(let i=3; i<=N; i+=3){
    P+= 1/i
    }
console.log('P  =', P);

// ب
let S=1;
let res=1;
for(let i=1; i<=N; i++){
    res*=X;
    S+=res;
}
console.log('S =',S);
// ج
let sinX = X;
let sign = -1;
let factorial = 1;
for(let i=3; i<=2*N-1; i+=2){
    factorial *=i*(i-1);
    sinX += sign * Math.pow(X,i)/factorial;
    sign *= -1;
}
console.log('sin(X)=',sinX);

// د
let T=0;
for( let i=1; i<=N; i++){
    T+=i*(i-1);
}
console.log('T=',T);


