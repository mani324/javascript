//finding odd numbers of array

var a=[1,54,6,7,3,99,28,10];

for(let i=0;i<a.length;i++ )
{
    if(a[i]%2!=0)
    {
       console.log(a[i]);
    }
}


// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var date=new Date();
var day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var today=day[date.getDay()];
var hour=date.getHours();
var hour=(hour<=12)?hour+"AM":hour+"PM";
var minute=date.getMinutes();
var seconds=date.getSeconds();
console.log("Today is :"+today);
console.log(hour+":"+minute+":"+seconds);

// Write a JavaScript program to find the area of a triangle 
// where lengths of the three of its sides are 5, 6, 7.

function findArea(side1,side2,side3)
{
     s=(side1+side2+side3)/2;
     var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
     return area;
}
console.log("Area of Triangle :"+findArea(5,6,7));


//  Write a JavaScript program to check two given numbers
//  and return true if one of the number is 50 or if their sum is 50. 

function a1(num1,num2)
{
    if(num1==50||num2==50)
    {
        return true;
    }
    else if(num1+num2==50)
    {
       return true;
    }
}
console.log(a1(50,0));
console.log(a1(35,15));


// 1. Write a JavaScript program to compare two objects to determine
//  if the first one contains equivalent property values to the second one
