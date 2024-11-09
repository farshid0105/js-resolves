for(let i=2; i<=1000;i++){
    let primitive=true;
    for(let h=2; h*h<=i; h++){
        if(i%h===0){
            primitive=false;
            break;
        }
    }
    if (primitive){
        console.log(i + 'is primitive');
             
    }
    let taam=1;
    for(let h=2; h*h<=i; h++){
        if(i%h===0){
            taam+=h;
            if(h*h!==i){
                taam +=i/h;
                
            }
        }
    }
    if(taam===i){
        console.log(i + 'is taam');
        
    }
}

