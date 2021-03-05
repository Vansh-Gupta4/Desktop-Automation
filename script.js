var robot = require("robotjs");
var fs=require("fs");
var id=setTimeout(handleMSpaint,2000);
robot.setMouseDelay(200);
function handleMSpaint(){
   robot.moveMouseSmooth(104,746);
   robot.mouseClick();
   robot.typeString(" paint");
   robot.keyTap("enter");
   setTimeout(writeHI,2000);
}

function writeHI(){
   robot.moveMouseSmooth(400,250);
   robot.mouseToggle("down","left");
   robot.dragMouse(400,450);
   robot.mouseToggle("up","left");

   robot.moveMouseSmooth(400,350);
   robot.mouseToggle("down","left");
   robot.dragMouse(600,350);
   robot.mouseToggle("up","left");

   robot.moveMouseSmooth(600,250);
   robot.mouseToggle("down","left");
   robot.dragMouse(600,450);
   robot.mouseToggle("up","left");

  
   robot.moveMouseSmooth(700,250);
   robot.mouseToggle("down","left");
   robot.dragMouse(900,250);
   robot.mouseToggle("up","left");

   robot.moveMouseSmooth(800,250);
   robot.mouseToggle("down","left");
   robot.dragMouse(800,450);
   robot.mouseToggle("up","left");

   robot.moveMouseSmooth(700,450);
   robot.mouseToggle("down","left");
   robot.dragMouse(900,450);
   robot.mouseToggle("up","left");


   robot.moveMouseSmooth(1242,3);
   robot.mouseClick();
   setTimeout(openWhatsapp,2000);
}
function openWhatsapp(){
   robot.moveMouseSmooth(104,746);
   setTimeout(function(){    //to give break
   robot.mouseClick();
   robot.typeString("whatsapp");
   robot.keyTap("enter");

   robot.moveMouseSmooth(85,112);
   robot.mouseClick();
   robot.typeString("testing");
   setTimeout(function(){
   robot.moveMouseSmooth(106,239);
   robot.keyTap("enter");
   robot.moveMouseSmooth(559,700);
   robot.keyTap("enter");
   robot.typeString("Hello World");
   robot.keyTap("enter");
   setTimeout(openChrome,2000);
   },1000);
},1000);
}

function openChrome(){
   robot.moveMouseSmooth(104,746);
   setTimeout(function(){    //to give break
   robot.mouseClick();
   robot.typeString(" Google chrome");
   robot.keyTap("enter");
   setTimeout(openTabs,2000);
   },2000);
}

function openTabs(){
   var rawData=fs.readFileSync("./chrome.json");
   var tabs=JSON.parse(rawData);    //make 2D array of raaw data
   for(var i=0;i<tabs.length;i++){
      for(var j=0;j<tabs[i].length;j++){
         robot.typeString(tabs[i][j]);
         robot.keyTap("enter");
         
         if(j<tabs.length-1){
            robot.keyToggle("control","down");
            robot.keyTap("t");
            robot.keyToggle("control","up");
         }else if(i<tabs.length-1){
            robot.keyToggle("control","down");
            robot.keyTap("n");
            robot.keyToggle("control","up");
         }
      }
   }
   setTimeout(openNotepad,2000)

}

function openNotepad(){
   robot.moveMouseSmooth(104,746);
   setTimeout(function(){    //to give break
   robot.mouseClick();
   robot.typeString(" Notepad");
   robot.keyTap("enter");
   setTimeout(writeOnNotepad,2000);
   },2000);

}

function writeOnNotepad(){
   robot.typeString("The System Is Ready To Use!!!")
}
