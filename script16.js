const stores = [
    {storeNumber:1,annualSell:700000},
    {storeNumber:2,annualSell:300000},
    {storeNumber:3,annualSell:500000},
    {storeNumber:4,annualSell:800000},
];

function payAndBest(stores){
    let bestSell = 0;
    let bestSellStore = 0;

    stores.forEach(store=> {
        if (store.annualSell<=500000) {
            store.payment=store.annualSell*0.03;
        }else if(store.annualSell<=700000){
            store.payment=store.annualSell*0.05;
        }else{
            store.payment=store.annualSell*0.07;

        }
        if (store.annualSell>bestSell) {
            bestSell=store.annualSell;
            bestSellStore=store.storeNumber
        }
    });
    stores.forEach(store=>{
        console.log(`store ${store.storeNumber} : annual sell ${store.annualSell}, pay ${store.payment}`);
        
    });
    console.log(`Best sell store: ${bestSellStore.storeNumber}`);
    
}

payAndBest(stores);