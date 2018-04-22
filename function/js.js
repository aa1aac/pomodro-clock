$(document).ready(function(){
  $("#reset").hide();
   var sessionHour=parseInt(document.querySelector("#hours").textContent);
   var sessionMinute = parseInt(document.querySelector("#minutes").textContent);
   var sessionSecond = parseInt(document.querySelector("#seconds").textContent);
      
  $("#addHour").click(function(){
   sessionHour=sessionHour+1;
   $("#hours").text(sessionHour+" :");
  })
   $("#addSec").click(function () {
       sessionSecond +=1;
       $("#seconds").text(sessionSecond);
   })
   $("#addMin").click(function () {
       sessionMinute += 1;
       $("#minutes").text(sessionMinute+" :");
   })
   
   $(".subtractHour").click(function () {
       sessionHour = sessionHour - 1;
       if (sessionHour>=0){
              $("#hours").text(sessionHour + " :");
       }
      else{sessionHour=0;}
   })
   $(".subtractSecond").click(function () {
       sessionSecond -= 1;
       if (sessionSecond>=0){
           $("#seconds").text(sessionSecond);
       }
       else{sessionSecond=0;}
   })
   $(".subtractMinutes").click(function () {
       sessionMinute -= 1;
       if (sessionMinute>=0){
          $("#minutes").text(sessionMinute + " :");
       }
       
      else{ sessionMinute=0;}
   })
})