let arr='["one","two","three","four","five","six"]';
let obj=JSON.parse(arr);
console.log(obj);
let count=1;
for (let i of obj)
{
    console.log(count++ +" "+i);
}
console.log(obj[5]);