function startTimer() {
   var my_timer = document.getElementById("my_timer");
   var time = my_timer.innerHTML;
   var arr = time.split(":");
   var h = arr[0];
   var m = arr[1];
   var s = arr[2];
   var ms = arr[3];
   if (ms == 60) {
     s++;
     if (s == 60) {
       m++;
       if (m == 60) {
         m++;
         if (h == 24) {
         h=0;
       }
       h--;
       m = 60;
     }
     m--;
     s = 59;
   }
   if (ms < 100) m = "0" + m;
   if (ms < 10) m = "00" + m;
   if (s < 10) s = "0" + s;
   if (m < 10) m = "0" + m;
   if (h < 10) h = "0" + h;
   document.getElementById("my_timer").innerHTML = h+":"+m+":"+s+":"+ms;
   setTimeout(startTimer, 1);
 }
