 //creating array by literal
 emp=["emp1","emp2","emp3","emp4","emp5"];
 for(i=0;i<emp.length;i++)
 {
     console.log(emp[i]);
 }

 //creating instance of array directly
  
 var empl =new Array();
empl[0]="employee1";
empl[1]="employee2";
empl[2]="employee3";
empl[3]="employee4";
empl[4]="employee5";

for(i=0;i<empl.length;i++)
{
    console.log(empl[i]);
}

//creating array using array constructor
  
var emplo=new Array("empl1","empl2","empl3","empl4","empl5");
for(i=0;i<emplo.length;i++)
{
    console.log(emplo[i]);
}
//concat method
var arrayConcat=emp.concat(empl,emplo);
console.log(arrayConcat);


//array copyWithin() method

var stu=["stu1","stu2","stu3","stu4","stu5","stu6"];

//var result=stu.copyWithin(2,0,2);//ex o/p :st1,stu2,stu1,stu2,stu5,stu6 (length not changed)
//start index included and end index excluded
var result=stu.copyWithin(2,0,3);
//expected result stu1,stu2,stu1,stu2,stu3,stu6
console.log(result);

//array entries method <20 empty i
var ser=[1,2,3,4,54,6,6];
var it=ser.entries();
for(var c of it)
{
    console.log(c);//prints like key value pair
}

//array every() method

function a(element,index)
{
    return index<5;
}
console.log([74,99,98,35,76,48].every(a));
console.log([74,99,98,35,76].every(a));

//array flat method
/*
it concats the elements of multidimentional array into one dimentional array
*/

speed=[500,688,[77,5,900,678],[88,4667,38,4535],[324,636]];
console.log("after flatting the array :"+speed.flat());

//flat map method

sample=[2,4,6,8];
console.log(sample.flatMap(d=>[[d/2]]));
//merges the elements of two different arrays by one by one
a1=[1,2,3,4,5];
a2=[6,7,8,9,1];
console.log(a1.flatMap((a1,index)=>[a1,a2[index]]));

//array fill() method 

let message="hello";

console.log(message);
console.log(89/0);
console.log(typeof message);
let am=0;
++am;
console.log(am);

console.log(a);
let counter = 0;
counter++;
++counter;
console.log(counter);

let p1=(5+6,8+0);
console.log(p1);

let p2=0;
let p3="0";
console.log(Boolean(p3));
console.log(Boolean(""));



//object array

let bike=[
    {name:"yamaha",model:854748,color:"blue"},
    {name:"tvs",model:74488,color:"red"},
    {name:"honda",model:894739,color:"black"}
]
console.log(bike);
console.log(bike[2].color);
console.log(bike[2].color+" ,"+bike[2].model);

//array fill method

let ar=[1,2,3,4,5];
ar.fill(10,0,3);//(value,start number,end number)
console.log(ar);

//array from method---(converts the given string into array)

let s=Array.from("this is going to converted into array");
console.log(s);

let set=new Set([1,2,3,44,5,5,2,2,2]);//allows only unique values not a duplicate values.
console.log(set);//set is the collection of values that occurs only once.

//array filter method
 
//let d=[23,78,90,56,88];
function filterElement(element,array,index)
{
    return element>=30;
}
console.log([23,78,90,56,88].filter(filterElement));

//array find method

let z=[2,4,65,67,446,54];
console.log(z.find(x=>x>400));//prints the nearest number

//find index method
let z1=[2,4,65,67,446,54];
console.log(z1.findIndex(x=>x>400));//gives the index of the element ,when the condition is satisfied. 
console.log("                      ");

/*array forEach() method 
The JavaScript array forEach() method is used to invoke the specified function once for each array element.
for each elements it call the function and prints the element.
*/

let z3=[2,4,65,67,446,54];
z3.forEach(
    function testfunc(reterive)
    {
        console.log(reterive);
    }

);

//array includes() method
let z4=[2,4,65,67,446,54,65];
  console.log("includes :"+z4.includes(65));

  //array indexof method
  console.log(z4.indexOf(65));
  console.log(z4.indexOf(65,3));//find the index position after specified index position.
  console.log(z4.indexOf(98));//if searched element is not found it returns to -1


  //array isArray() method

  console.log(Array.isArray(1,2,3,45,5));
  console.log(Array.isArray(z4));

  //array join method
let z5=["one","two","three","four","five"];
  console.log(z4.join('~'));
  console.log(z5.join('~'));
  //it converts the string/number array into values with seperator.


  //array keys() method

z5.keys();
let iterator =z5.keys();
for(let print of iterator )
{
    console.log("keys method :"+print);
}

//last indexOf method 
console.log("__________________________________________________________")
console.log(z5.lastIndexOf("two"));

/*map() method
The JavaScript array map() method calls the specified function for every array element and returns the new array.]

This method doesn't change the original array.*/
 

let z6=[36,5,6,7,8,8,5];
let res=z6.map(x=>(x*3));
console.log(res);

//array of() method

console.log(Array.of(1,2,3,4,45));
console.log(Array(20));//creates the emty array of length 20
console.log(Array.of(20));//creates new array with element 20

//array pop() method
//removes the last element of the array
z6.pop();
console.log(z6);

//array push() method
let z7=["one","two","three","four","five"];
z7.push("six");
console.log(z7);

//array reverse() method

z7.reverse();
console.log(z7);

//array reduce() method
/*It executes a provided function for each value from left to right and reduces the array to a single value.
*/
let f=[1,2,3,4,5];
let fresult=f.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(fresult);//reduces the array from left to rigtht


let fres=f.reduceRight((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(fres);//reduces the array  from right to left

//arrayt some() method
/*It determines if any element of the array passes the test of the implemented function.
*/
let testArray=[2,4,45,44,90];
function t(testArray)
{
  return (testArray>50);
}
let someTest=testArray.some(t);
console.log(someTest);
console.log(t);

//array shift method
//it removes the first element of the array and returns that element

let r=testArray.shift();
console.log("first element(removed element) :"+r);
console.log("array after shift method :"+testArray);

//array slice method

let sliced=testArray.slice(0,3);
console.log("array before slice :"+testArray)
console.log("array after slice :"+sliced);

//array sort method
//for ascending order use compare function  
//sort:ascending order
let sortArray=[1,888,99,30,7];
let sortedArray=sortArray.sort(
    function compare(a,b)
    {
      return a-b;    });

console.log(sortedArray);

//sort:descending order

let sortDes=sortArray.sort(
    function des(a,b)
    {
        return b-a;
    }
)
console.log(sortDes);

//array splice method
//add and and removes the element.
let day=["sun","mon","tue","wed","the","fri","sat"];
day.splice(2,1);
console.log(day);
day.splice(2,0,"tue");
console.log(day);
//array toString locale method
//converts string array into string
let stringOut=day.toLocaleString();
console.log(stringOut);
let check=[1,2,3,4,5];
let checkConversion=check.toLocaleString();
console.log(checkConversion);

//unshift method in array

//shift

day.shift();
console.log(day);

//unshift
day.unshift("sun");
console.log(day);


//array values() method

let iter=day.values();
for(let print of iter){
    console.log(print);
}

let ex=[1,2,33,45,56];
for(let i=0;i<ex.length;i++)
{
    let res=ex[i]+1;
    console.log(res);
}

//constant array

const fruits=["apple","orange","grapes","banana"];
fruits.push("pineapple");
console.log(fruits);


//for each in Array
var number=0;
var inputArray=[2,4,566,56,66,6];
inputArray.forEach(first);

//console.log(number);
function first(x)
{
     number=x+1;
     console.log(number);
}
//forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
//console.log(number);
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);


// function myFunction(item) {
//   sum += item;
//   console.log(sum);
// }


//for in loop

//for in loop is used to iterate the objects,arrays
let data={
    1:"name",
    2:"age",
    3:"address",
    4:"phone"
}

for(let x in data)
{
    console.log(data[x]);
}
var output=0;
var number=[223,4,44,5,66,66,6,49];
for(let iter in number)
{
 output=number[iter]*2;
 console.log(output);   
}


//for of loop used to iterate the values of iterables

//for in in string

var learn="learning javascript";
for(let itr of learn)
{
    console.log(itr);
}