//functiom with parameter
function a(num1,num2)
{
   return (num1+num2);
}
console.log(a(55,55));
//functon without parameter
function b()
{
   var msg ="test function";
   return msg;
}
console.log(b());
//function object
var add=new Function("num1","num2","return(num1-num2)" );
console.log(add(10,5));

let fun=function(a,b)
{
   return a+b;
}
console.log(fun(45,55));
//arrow function

let fun2=(a,b)=>(a+b);
console.log(fun2(45,78));

function calculate(input) {
   return input * input;
}

// let calculate1=(input) => { } 
//    input*input;
//    console.log(calculate1(5));

console.log(calculate(5));



let calculateSum= (ip)=>ip+ip;
console.log("calculating sum :"+calculateSum(5));