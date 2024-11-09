const coins = [20,10,5];
for (let coin20=1; coin20<=2; coin20++){
    for (let coin10=1; coin10<=5; coin10++){
        for (let coin5=1; coin5<=10; coin5++){
            const sum = coin20*20 + coin10*10+ coin5*5;
            if (sum===50) {
                console.log(`20: ${coin20} , 10: ${coin10}, 5: ${coin5}`);
            }
        }
                
    }
}