var mark = {
  name: "Mark",
  tahirColor: "navy blue"
};
var line = {
  name: "Lisa",
  tahirColor: "red"
};

function Friend(name,tahirColor){
  this.name = name;
  this.tahirColor = tahirColor;
}
var denny = new Friend("Denny","green");
var line = new Friend("Lisa","red");
alert(denny.name);
