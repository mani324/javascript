const text = '{"name":"John", "birth":"1998-05-21", "city":"New York"}';

let convert=JSON.parse(text);
console.log(convert.birth);
console.log(convert.name);
console.log(convert.city);
let count =1;
for(let itr in convert)
{
    console.log(count++ +" : "+itr);
}

let o=convert["name"];
console.log(o);
let p=convert["birth"];
console.log(p);