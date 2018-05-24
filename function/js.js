$(document).ready(function(){
  $("#reset").hide();
   var d =parseInt(document.querySelector("#days").textContent);
   var h = parseInt(document.querySelector("#hours").textContent);
   var m = parseInt(document.querySelector("#minutes").textContent);
   var s = parseInt(document.querySelector("#seconds").textContent);
   var clockClass=document.querySelector(".clock"); 
    var clo = document.querySelector(".clo");  
    $("#addDay").click(function () {
        d += 1;
        $("#days").text(d);
    })
    $("#addHrs").click(function () {
        h += 1;
        $("#hours").text(h);
    })
   $("#addSec").click(function () {
       s +=1;
       $("#seconds").text(s);
   })
   $("#addMin").click(function () {
       m += 1;
       $("#minutes").text(m);
   })
   
   $(".subtractSecond").click(function () {
       s-= 1;
       if (s>=0){
           $("#seconds").text(s);
       }
       else{s=0;}
   })
   $(".subtractMinute").click(function () {
       m-= 1;
       if (m>=0){
          $("#minutes").text(m);
       }
       
      else{ m=0;}
   })
    $(".subtractHour").click(function () {
        h -= 1;
        if (h >= 0) {
            $("#hours").text(h);
        }

        else { h = 0; }
    })
    $(".subtractDay").click(function () {
        d -= 1;
        if (d >= 0) {
            $("#days").text(d);
        }

        else { d = 0; }
    })
   $(".start").click(function(){
       $(".start").fadeOut();
       $(".sub").fadeOut();
       $(".caption").fadeOut();
       $("body").css("background-color", "black");
       $("body").css("color", "white");
        clockClass.classList.toggle("clicked");
       clo.classList.toggle("clicked");
       var m= parseInt(document.querySelector("#minutes").textContent);
       var s = parseInt(document.querySelector("#seconds").textContent);
       var h = parseInt(document.querySelector("#hours").textContent);
       var d = parseInt(document.querySelector("#days").textContent);
      function countDown(){
          
      }
        
   })


   
   
})