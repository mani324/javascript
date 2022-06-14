function findError(number)
{
    try{
    if(number==0)throw "Number cannot be zero";
    if(number<0)throw "Number cannot be negative";
    if(number>=100)throw "Number cannot be greater than 100";
    }
    catch(err)
    {
       console.log("Input Number :"+err);
    }
    finally{
        console.log("this will print regardless of the exception");
    }
    

}
findError(150);
findError(0);
findError(-93);