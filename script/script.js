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

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
