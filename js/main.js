// ********************* Below Slider Module *******************

// $("#workTime").on("change", function() {
//   $("#workTimeLabel").text();
// });

function setWorkTime(workVal){
  // $("#workTimeLabel").text($("#workTime").val());
  workVal = checkTime(workVal);
  $("#workTimeLabel").text(workVal);

}

function setBreakTime(breakVal){
  breakVal = checkTime(breakVal);
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
  timer(60);
});


function timer(time){
  var minutes = Math.floor(time/60);
  var seconds = time%60;
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  $("#timer").html(minutes + ":" + seconds);
  time = time - 1;
  var t= setTimeout(timer,1000,time);
  if (time === -1) {
    clearTimeout(t);
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
