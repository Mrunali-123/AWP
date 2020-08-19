setInterval(function () {

    console.log("I am interval, using setinterval!!");
  }, 1000);
  
  
  setInterval(() => {
  
    console.log("arrow function");
  }, 1000);
  
  
  let anfn = function () {
  
    console.log("name function");
  };
  setInterval(anfn, 1000);