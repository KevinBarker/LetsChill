console.log("hello world")
var viewport =
{
  height: $( window ).height(),
  width:  $( window ).width()

};

$(document).ready(function(){
  console.log("hello world");
  $("#firstBlock").css("height",viewport.height);
  $("#secondBlock").css("height",viewport.height);
  $("#thirdBlock").css("height",viewport.height);
});
