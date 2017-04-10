console.log("hello world");

$(document).ready(function(){
  console.log("document ready");
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
  {
     // $("#subtext").html("Phone detected"); //mobile test
	 $(".mobileSpacing").html("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
	 $(".arrow").css("width","10%");
	 $("#article").css("margin-top","100%");
	  $("#article").css("margin-bottom","50%");
	 $(".flexImage").css("width","100%");
	 $(".flexImage").css("height","auto");
   $(".flexImage").css("border-style","none");
   $(".articleFlex").css("width" "100%");
  }

})
