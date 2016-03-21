function startTimer() {
    var d = new Date();
    var t = d.getTime();
    var end=0;
    var timer = setInterval( function () {
  	 if (end==1) return;
     var newDate = new Date();
     var newT = newDate.getTime()-t;
     var d = new Date;
     d.setTime(newT);
      var h=d.getHours()-2;
      var m=d.getMinutes();
      var s=d.getSeconds();
      var ms=d.getMilliseconds();
     document.getElementById("my_timer").innerHTML =  addZero(h,2)+":"+addZero(m,2)+":"+addZero(s,2)+"."+addZero(ms,3);
 }, 1, t, end);
}
function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}
