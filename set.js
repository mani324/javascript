var count=1;
let set=new Set();
set.add("one");
set.add("two");
set.add("three");
set.add("four");
set.add("five");
console.log(set);
for(let i of set)
{
    console.log(i);
    
}
var s=set.values();//iterator
console.log(s);
set.add("five");
console.log(set);
set.delete("three");
console.log(set);
set.add(49);
console.log(set);