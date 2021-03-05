var robot = require("robotjs");
// robot.moveMouseSmooth(1219,720);

var id=setInterval(showMouseLocation,1000);

function showMouseLocation(){
   var mouse = robot.getMousePos();
   console.log(mouse);
   
   if(mouse.x==0 && mouse.y==0){
   clearInterval(id);
   }
}