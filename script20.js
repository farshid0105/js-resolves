for(let thousand=1; thousand<=9; thousand+=2){
    for(let hundred=0; hundred<=9; hundred+=2){
        for(let ten=1; ten<=9; ten+=2){
            for(let one=0; one<=9;one+=2){
                let num=thousand*1000+hundred*100+ten*10+one;
                console.log(num);
                
            }
        }
    }
}