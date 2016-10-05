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
