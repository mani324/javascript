// const obj = JSON.parse('{"name":"John", "age":30, "city":"Nekw Yor"}');
// console.log(obj);


const text = '{"name":"John", "birth":"1998-05-21", "city":"New York"}';


var emp=JSON.parse(text);
var bday=new Date(emp.birth);
console.log(bday);

const cars = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(cars);[ 'Ford', 'BMW', 'Audi', 'Fiat' ]


console.log("converting JSON text to array :"+myArr);

//Convert a string into a date, using the reviver function:

let bikes='{"name":"tvs","model":"RTR 160","R_Year":"2020-05-02"}';

let bike=JSON.parse(bikes,function(key,value)
{
    if(key=="R_Year")
    {
        return new Date(value);
    }
    else{
        return value;
    }
});
console.log(bike);

let car='{"name":"audi","model":"89390","speed":"function(){return 390;}"}';

let c=JSON.parse(car);
c.speed = eval("("+c.speed+")" );

//eval(x: string): any
// A String value that contains valid JavaScript code.
// Evaluates JavaScript code and executes it.

console.log(c.speed());


//JSON stringify method =coverts js objects into string.

let carData={
    name:"TATA",model:"punch",release:"may 2022",color:"blue"
}
let convert=JSON.stringify(carData);
 console.log("object to string using stringify method :"+convert);

 //converting json array  into text
 let bikeData=["tvs","yamaha","ktm","bmw","honda","hero"];
 let c_bikeData=JSON.stringify(bikeData);
 console.log("js array to string using stringify method :"+c_bikeData);
 