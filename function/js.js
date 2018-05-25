$(document).ready(function(){
  $("#reset").hide();
   var d =parseInt(document.querySelector("#days").textContent);
   var h = parseInt(document.querySelector("#hours").textContent);
   var m = parseInt(document.querySelector("#minutes").textContent);
   var s = parseInt(document.querySelector("#seconds").textContent);
   var clockClass=document.querySelector(".clock"); 
    var clo = document.querySelector(".clo");  
    var reset=document.querySelector(".reset");

    $("#addDay").click(function () {
        if (d<365){
        d += 1;
        $("#days").text(d);}
        else{
            d=365
        }
    })
    $("#addHrs").click(function () {
        if(h<24){
        h += 1;
        $("#hours").text(h);}
        else{
            h=24;
        }
    })
   $("#addSec").click(function () {
       if(s<59){s +=1;
       $("#seconds").text(s);}
       else{
           s=59
       }
   })
   $("#addMin").click(function () {
      if(m<59) {m += 1;
       $("#minutes").text(m);}
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
       var minutes= parseInt(document.querySelector("#minutes").textContent);
       var seconds = parseInt(document.querySelector("#seconds").textContent);
       var hours = parseInt(document.querySelector("#hours").textContent);
       var days = parseInt(document.querySelector("#days").textContent);
       function calculate() {
           setTimeout(calculate, 1000);
           $('#days').html(days);
           $("#hours").html(hours);
           $("#minutes").html(minutes);
           $("#seconds").html(seconds);
           seconds--;
           if (seconds < 0) {
               seconds = 59;
               minutes--;
               if (minutes < 0) {
                   hours--;
                   minutes = 59;
                   if (hours < 0) {
                       days--;
                       hours = 23;
                       if (days < 0) {
                           days = 0;
                           hours = 0;
                           minutes = 0;
                           seconds = 0;
                           $(".info").remove();
                           $(".clock").html("COMPLETED");
                           var audio=document.querySelector("audio");
                           audio.play();
                           document.querySelector(".reset").classList.remove("hidden");

                   }
               }
           }
       }
    }
       calculate();

   })


   
   
})