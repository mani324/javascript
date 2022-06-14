let check=new Promise(function(check1,check2)
{
    let num=1;
    if(num==1)
    {
        check1("true");
    }
    else if(num==0)
    {
    check2("false");
    }
});
check.then(
    function(v)
    {
        result(v);
    },
    function(e)
    {
        result(e);
    }

);
function result(status)
{
    console.log("result is :"+status);
}