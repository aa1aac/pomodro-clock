$(document).ready(function(){
  $("#reset").hide();
   var sessionHour=parseInt(document.querySelector("#hours").textContent);
   var sessionMinute = parseInt(document.querySelector("#minutes").textContent);
   var sessionSecond = parseInt(document.querySelector("#seconds").textContent);
    var breakHour = parseInt(document.querySelector("#breakhours").textContent);
     var breakMinute = parseInt(document.querySelector("#breakminutes").textContent);
      var breakSecond = parseInt(document.querySelector("#breakseconds").textContent);
      
  $("#addHour").click(function(){
   sessionHour=sessionHour+1;
   $("#hours").html(sessionHour+":");
  })

  $("#addMinute").click(function () {
      sessionMinute = sessionMinute + 1;
      $("#hours").html(sessionMinutes+":");
  })


  $("#addseconds").click(function () {
      sessionSecond = sessionSecond + 1;
      $("#hours").html(sessionSecond);
  })


  $("#addBreakHour").click(function () {
      breakHour = breakHour + 1;
      $("#breakHours").html(breakHour);
  })


  $("#addBreakMinute").click(function () {
      breakMinute = breakMinute + 1;
      $("#breakMinutes").html(breakMinute);
  })

  $("#addBreakSecond").click(function () {
      breakSecond = breakSecond + 1;
      $("#breakSeconds").html(breakSecond);
  })

})