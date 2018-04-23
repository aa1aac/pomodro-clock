$(document).ready(function(){
  $("#reset").hide();

   var sessionMinute = parseInt(document.querySelector("#minutes").textContent);
   var sessionSecond = parseInt(document.querySelector("#seconds").textContent);
      

   $("#addSec").click(function () {
       sessionSecond +=1;
       $("#seconds").text(sessionSecond);
   })
   $("#addMin").click(function () {
       sessionMinute += 1;
       $("#minutes").text(sessionMinute+" :");
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

   $(".start").click(function(){
       $(".start").hide();
       $(".subtractSecond").hide();
       $(".subtractMinutes").hide();
       $("#addMin").hide();
       $("#addSec").hide();
       var m= parseInt(document.querySelector("#minutes").textContent);
       var s = parseInt(document.querySelector("#seconds").textContent);
      console.log(m,s);
          var counter1 = setInterval(timer, 1000);
          var counter2 = setInterval(time, 6000);
      function timer(){
         
       s-=1;
       if (s<0){
           clearInterval(counter1);
       }
       else{$("#seconds").text(s);}
      }
      
      if (s===0){

         function time() {

             m -= 1;
             if (m === 0) {
                 clearInterval(counter2);
             } else {
                 $("#minutes").text(m);
             }
         }
      }
     
   })


   
   
})