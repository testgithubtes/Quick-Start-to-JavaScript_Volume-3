//declaration variable
var number = 3;
//decalration object
var person = {
  age : 12,
  gender : "homme",
  situation : "single"

};
function personne (age,gender,situation){
  this.gender = gender;
  this.age = age;
  this.situation = situation;
}
var gender = prompt("put your gender");
var age = prompt("put your age");
var situation = prompt("put your situation");
personne(age,gender,situation);
if(age>30 && gender === "homme" && situation === "single"){
  alert("you should work,I know that the only reason is that you don't work ");
}
else if(age>30 && gender === "women" && situation === "single"){
  alert("you should focus more in your makeup");
}
else{
  alert("they still time");
}
