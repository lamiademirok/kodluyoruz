function askName() {
    var name = prompt("What's your name?");
    document.getElementById("myName").innerText = name;
 }
 
 function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var weekDay = date.getDay();

   switch(weekDay){
     case 1: weekDay = "Monday"; break;
     case 2: weekDay = "Tuesday"; break;
     case 3: weekDay = "Wednesday"; break;
     case 4: weekDay = "Thursday"; break;
     case 5: weekDay = "Friday"; break;
     case 6: weekDay = "Saturday"; break;
     case 0: weekDay = "Sunday"; break;
    }
  
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time = h + ":" + m + ":" + s + " " + weekDay;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }

 askName();
 showTime();
 