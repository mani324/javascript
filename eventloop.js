// setTimeout(function()
// {
//   for(let i=0;i<50;i++)
//   {
//       console.log(i);
//   }
// },5000);


(function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
        for(let i=0;i<10;i=i+2)
        {
            console.log(i);
        }
               
    },100); // has a default time value of 0
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      for(let i=0;i<10;i++)
      {
          console.log(i);
      }
    }, 100);
  
    console.log('this is the end');
  
  })();
  
  // "this is the start"
  // "this is just a message"
  // "this is the end"
  // "Callback 1: this is a msg from call back"
  // "Callback 2: this is a msg from call back"
  