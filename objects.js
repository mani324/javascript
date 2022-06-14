//objects by literal
emp={name:"vm",age:24,ph:9080300030,id:89479}
console.log("Employee name :"+emp.name+" , Employee Age :"+emp.age+" , phone :"+emp.ph," Employee id :"+emp.id);

//by creating instance of object directly

var stu=new Object();
stu.id=9033;
stu.name="kumar";
stu.age=19;
stu.institution="abc college";
stu.ph=8938930009;
console.log("stu_id :"+stu.id+", stu_name :"+stu.name+", stu_age :"+stu.age+", stu_ph :"+stu.ph);

//by using an object constructor
 function car(id,model,rYear,price)
 {
     this.id=id;
     this.model=model;
     this.rYear=rYear;
     this.price=price;
     
 }
 c=new car(2133,4332,2022,989984.00);
 console.log("c_id :"+c.id+", c_model :"+c.model+", c_rYear :"+c.rYear+", c_price :"+c.price);


let ex=
{
  12:"car",
  75:"bike",
  43:"train"

};

console.log(Object.entries(ex)[1]);

let person=
{
    name:"vm",
    id:3424,
    phone:9904400339,
    address:"chennai",
    work:function ()
    {
       console.log(this.name+" ,"+this.id,+" "+this.phone," "+this.address);
    }
};
//console.log(person.work);
console.log(person.name);
console.log(person.work);
//self invoking functions

(function (){
    console.log("this is self invoking function");
})();

//functions can be used as values
let add=function(number1,number2)
{ 
    return number1*number2;
}
let num=add(5,7);
console.log(num);

//Function constructor

let funConstructor=new Function("numb1","numb2" ,"return numb1*numb2");

console.log(funConstructor(57,9));

//function hoisting

console.log(fhoisting(5,4));
function fhoisting(x,y)
{
    return x*y;
}
//arrow functions
let afunction=(x)=>5+x;
console.log(afunction(10));
//arrow function with multiple arguments
let afunction2=(x,y)=>x+y;
console.log(afunction(10+100));

let p = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
p =undefined;  
console.log(p);


