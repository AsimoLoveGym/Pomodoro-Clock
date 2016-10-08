// var workTime = 25 * 60;
// var breakTime = 5 * 60;

// for quick test
var workTime = 2;
var breakTime = 2;

var workCompleted = false;


// ********************* Below Slider Module *******************

// $("#workTime").on("change", function() {
//   $("#workTimeLabel").text();
// });

function setWorkTime(workVal){
  // $("#workTimeLabel").text($("#workTime").val());
  workVal = checkTime(workVal);
  workTime = workVal * 60;
  $("#workTimeLabel").text(workVal);

}

function setBreakTime(breakVal){
  breakVal = checkTime(breakVal);
  breakTime = breakVal * 60;
  $("#breakTimeLabel").text(breakVal);
}

// $("#breakTime").slider();
// $("#breakTime").on("change", function(slideEvt) {
//   $("#breakTimeLabel").text(slideEvt.value);
// });

//
// var slider = new Slider("#workTime");
// slider.on("slide", function(slideEvt) {
// 	$("#workTimeLabel").text(slideEvt.value);
// });


// ********************* Below Timer Module *******************
$(document).ready(function(){
  // timer(60);
  $("#play").on("click",function(){
    workModeEntered();
    timer(workTime);
    // console.log("done");
  });
});

function workModeEntered(){
  console.log("work Mode Entered!");
  // $("#workTime").disabled = true;
  document.getElementById('workTime').disabled = true;
  document.getElementById('breakTime').disabled = true;
  $('#play').toggle();

}

function breakModeEntered(){
  $("#background-image").addClass("break-mode-img");
  // console.log($("#background-image").classList());
  $("#pomodoro-clock-body").addClass("break-mode-clock-body");
}


function timer(time){
  var minutes = Math.floor(time/60);
  var seconds = time%60;
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  $("#timer").html(minutes + ":" + seconds);
  time = time - 1;
  var t= setTimeout(timer,1000,time);
  if (time === -1 && workCompleted === false) {
    clearTimeout(t);
    console.log("It's break time!");
    workCompleted = true;
    breakModeEntered();
    time = breakTime;
    timer(breakTime);
  } else if (time === -1 && workCompleted) {
    console.log("Should be cleared!");
    clearTimeout(t);
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
