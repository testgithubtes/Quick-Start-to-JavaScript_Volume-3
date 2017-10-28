var myCoffee = {
  flavor: "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true,

  reheat: function(){
    if(mycofee.temperature ==="cold"){
      myCoffee.temperature = "piping hot";
      alert("Your coffee has been reheated:");
    }
  }
};
myCoffee.temperature = "cold";
myCoffee["temperature"] = "lukeware";
myCoffee.reheat();
