//parseFloat method
//string to float
var numberM="500.5667";
var numberM1="50";
var numberM3="0.8748";
console.log(Number.parseFloat(numberM)+" "+Number.parseFloat(numberM1)+" "+Number.parseFloat(numberM3));
//parse int method
//sting to int
console.log(Number.parseInt(numberM));
console.log(Number.parseInt(numberM1));
console.log(Number.parseInt(numberM3));


//Math  methods
let number=6.92;

console.log(Math.round(number));
console.log(Math.ceil(number));//round up to nearest integer

console.log(Math.floor(number));//round down to nearest integer

console.log(Math.trunc(number))//removes the fractional part

//Math pow
var result=Math.pow(5,5);//5*5*5*5*5
console.log(result);
//console.log(5*5*5*5*5);

//Math 
let absolute=Math.abs(-89);
console.log(absolute);
let absolute1=Math.abs(0);
console.log(0);

//Random

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
//javascript random number returns random integer

var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);