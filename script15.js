const person =[
    {name:'Ali', code:100, diplomaCode:2, age:18, field:24, gender:'M'},
    {name:'Sara', code:124, diplomaCode:0, age:16, field:20, gender:'F'},
    {name:'Hassan', code:124, diplomaCode:2, age:19, field:24, gender:'M'},
    {name:'Maryam', code:101, diplomaCode:1, age:18, field:24, gender:'F'},
    {name:'Gholam', code:132, diplomaCode:2, age:18, field:21, gender:'M'},
];

let boysField24 = 0;
let under18 = 0;
let field24 = 0;
let person24 = person.length;
person.forEach(per =>{
    if(per.gender=== 'M' && per.field===24){
        boysField24++;
        }
    if(per.age<18){
            under18++;

        }
    if(per.field===24){
        field24++;
    }
});

const percentField24=(field24/person24)*100;
 
console.log("Total number of boys in field24", boysField24);
console.log("Total person under18", under18);
console.log("Total percent of person in field24", percentField24 +"%");





