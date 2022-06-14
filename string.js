var detail="this is a example string";

//string match method

var result=detail.match(/exa/g);

console.log(result);

//string replace method

var one="this method going to replace the string given by the user";

var result1=one.replace("by the user","");
console.log("Original String :"+one);
console.log("replaced String :"+result1);

//substring method

var result2=one.substring(1,13);
console.log("substring output :"+result2);
console.log(one.charAt(12));
  //string slice method


  var result3=one.slice(-10,-1);
  console.log("output :"+result3);
