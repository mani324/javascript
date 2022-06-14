/*
var a=5;
var b=86;
if(b>a)
{
    console.log("b is greater than a");
}
else if (a>0)
{
    console.log("a is greater than zero");
}

else{
    console.log("above not true");
}*/

for(let i=0;i<20;i++)
{
    if( i % 2 == 0)continue;
        console.log(i);
    
}
for(let i=0;i<20;i++)
{
    if( i==15)break;
        console.log(i);
    
}

//conditional

var day=10;
switch(day)
{
        case 1:
        day="sun";
        console.log("day :"+day);
        break;

        case 2:
        day="mon";
        console.log("day :"+day);
        break;
        case 3:
        day="tue";
        console.log("day :"+day);
        break;
        case 4:
        day="wed";
        console.log("day :"+day);
        break;
        case 5:
        day="thu";
        console.log("day :"+day);
        break;
        case 6:
        day="fri";
        console.log("day :"+day);
        break;
        case 7:
        day="sat";
        console.log("day :"+day);
        break;
        default:
            console.log("every day is a good day");

}