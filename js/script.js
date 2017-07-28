
document.getElementById('lightBulb').style.width = "600px";
document.getElementById('lightBulb').style.left = "-15px";
document.getElementById('lightBulb').style.position = "absolute";
function turnOn() {
  document.getElementById('lightBulb').style.left = "-262px";
  document.getElementById('onButton').style.color = "green";
  document.getElementById('offButton').style.color = "red";
}
function turnOff(){
  document.getElementById('lightBulb').style.left = "-15px";
  document.getElementById('offButton').style.color = "green";
  document.getElementById('onButton').style.color = "red";
}
addEventListener("keydown", function (event) {
  if(event.keyCode ==  86){
    document.body.style.background = "violet";
  }
});
addEventListener("keyup", function (event) {
  if(event.keyCode ==  86){
    document.body.style.background = "";
  }
});
