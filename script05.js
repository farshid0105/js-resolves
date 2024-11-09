
    
const staff = [
    {sName:'ali', salary:20000},
    {sName:'Hassan', salary:80000},
    {sName:'Reza', salary:50000},
    {sName:'Gholam', salary:130000},
      
];

staff.map(item =>{
    if(item.salary<=50000){
        console.log(item.sName,'Moaf');       
    } else if(item.salary>50000 && item.salary<100000){
        console.log(item.sName, (item.salary-50000) *10/100);

    } else if (item.salary>=100000){
        console.log(item.sName, (item.salary-100000) *15/100);
    }
})
