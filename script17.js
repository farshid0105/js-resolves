function numberOfDay(N){
    const monthDays =[31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
    let month=1;
    let day=N;

    while (day>monthDays[month-1]){
        day-=monthDays[month-1];
        month++;
    }
    return `${day} / ${month}`;
    
}
const dayNumber=64;
const date=numberOfDay(dayNumber);
console.log(date);
