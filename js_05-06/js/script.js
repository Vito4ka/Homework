var time = {};
time.flag = 0;    //timer is stopped

function startTimer() {
    time.start = callTime();// Remember when we started
    time.id = setInterval(function () {
  	 if (time.flag==1) return; //Is working. No other pcs
     time.last = callTime()-time.start;
     displayTime();
   }, 19);
}
function callTime(){
  return (new Date()).getTime();
}
function displayTime(){
  var d = new Date;
  d.setTime(time.last);
  var h=d.getHours()-2; //time zone
  var m=d.getMinutes();
  var s=d.getSeconds();
  var ms=d.getMilliseconds();
  time.display = addZero(h,2)+":"+addZero(m,2)+":"+addZero(s,2)+"."+addZero(ms,3);
 document.getElementById("my_timer").innerHTML = time.display;
}

function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
};
function stopTimer(){
  clearInterval(time.id);
  time.flag = 0;
};
function resetTimer(){
  stopTimer();
  time.last = 0;
    clearInterval(time.id);
    displayTime();
};
function splitTimer(){
var elementDiv = document.createElement("DIV");
elementDiv.innerHTML = time.display;
document.body.appendChild(elementDiv);
};
