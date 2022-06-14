var map=new Map([
[1,"sun"],
[2,"mon"],
[3,"tue"],
[4,"wed"],
[5,"thu"],
[6,"fri"],
[7,"sat"]
]);
console.log(map);
//set method-to add a elements in a map.

map.set(8,"sun");
console.log(map);
map.set(8,"next week");
console.log(map);
//get method -get the value of the key
console.log(map.get(6));
console.log(map.size);
map.delete(8);
console.log(map);
console.log(map.has(6));//checks the key in the map.

for(let x of map.entries())
{
 
   console.log(x);
}
