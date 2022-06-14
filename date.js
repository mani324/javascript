//var date=new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getUTCDate());
// console.log(date.toTimeString());
// console.log(date.toDateString());

var date =new Date();
         
console.log(date);

console.log(date.toUTCString());//UTC
console.log(date.toISOString());//IST
console.log(date.toDateString());
console.log(date.getTime());
console.log(date.getHours());

//setFullYear method

var date=new Date();
date.setFullYear(2044);
console.log("setFullYearMethod :"+date);

//set month method

date.setMonth(11);
console.log("set month method"+date);

//set date method

date.setDate(35);
console.log(date);

//set hours8

date.setHours(88);//if we give the values more than a limit it will get overflows.
console.log(date);


//