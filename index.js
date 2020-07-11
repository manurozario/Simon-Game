var comp = [];
var plyr = [];
var count = 0;
var num = 0;
var lvl = 0;
var i = 0;


$(document).keydown(function(){
    if(count === 0){
      comp.push(btnAct(1));
      count++;
      lvls(count);
      i = 1;
    }
});


$(".btn").click(function(){
  if(0 < i && i <= count) {


      plyr.push(btnAct(this.className));

      if(plyr[i-1] === comp[i-1]){
        i++;
        if(i > count){
          plyr = [];
          count++;
          i = 1;

          setTimeout(function(){
            lvls(count);
            comp.push(btnAct(1));
          }, 1000);
        }
      }

      else {
        wrong();
      }
  }

});


function wrong() {

  $("h1").text("Game Over, Press Any Key to Restart.")

  $("body").addClass("wrong")
  setTimeout(function(){
    $("body").removeClass("wrong")
  }, 200)

  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();

  comp = [];
  plyr = [];
  i = 1;

  count = 0;
}


function lvls(count) {
  $("h1").text("Level " + count);
}


function btnActivity(btnClr, btnNum) {

  var sound = new Audio("sounds/" + btnClr + ".mp3")
  sound.play();

  $("." + btnNum).addClass("pressed");
  setTimeout(function(){
    $("." + btnNum).removeClass("pressed");
  }, 200);

}


function btnAct(inpt) {

  if(inpt === 1) {
    inpt = Math.floor((Math.random() *4)+1)
  }

  switch(inpt){
    case 1:
    case "btn btn1":
    btnActivity("red", "btn1");
    num = 1;
    break;

    case 2:
    case "btn btn2":
    btnActivity("green", "btn2");
    num = 2;
    break;

    case 3:
    case "btn btn3":
    btnActivity("blue", "btn3");
    num = 3;
    break;

    case 4:
    case "btn btn4":
    btnActivity("yellow", "btn4");
    num = 4;
    break;

    default: console.log(this.innerHTML);
  }

  return num;
}
