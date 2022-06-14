function sum(num1,num2,multiplication)
{
    console.log("sum of the number is :"+(num1+num2));
    multiplication(num1,num2);
}
function mul(num1,num2)
{
    console.log("multiplication is :"+num1*num2)

}
sum(45,43,mul);
//nested callback function example 
/*
function someThing() {
	console.log("Do Something!");
}

function someThingElse () {
  console.log("Do Something Else!");
}

function doThirdThing () {
  console.log("Do Third thing!");
}

someThing(function(){
  console.log("First anonymous callback!");
  someThingElse(function(){
    console.log("Second anonymous callback!")
    doThirdThing(function() {
      console.log("Third anonymous callback!");
    })
  })
})
*/

function condition(num)
{
   if (num>0)
   {
       console.log("number is the hole number :"+num);
   }
}
function condition1(num)
{
    if(num<=0)
    {
    console.log("not a hole number :"+num);
    }
}
function condition2(num)
{
    if(num<0)
    {
        console.log("this is the negative number :"+num);
    }
    else{
        console.log("this is hole number :"+num)
    }
}

condition(2,condition1(22),condition2(-849));

/*
  When you pass a function as an argument, remember not to use parenthesis.

  Right: myCalculator(5, 5, myDisplayer);

  Wrong: myCalculator(5, 5, myDisplayer());
*/