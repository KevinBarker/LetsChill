
var vid = null
var time = null
var scroll = null
var windowheight = null


var scrollpos = null
var targetscrollpos = null
var accel = null


// ---- Values you can tweak: ----
var accelamount = null //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.



$(document).ready(function(){
     vid = document.getElementById('v0');
     time = $('#time');
     scroll = $('#scroll');
     windowheight = $(window).height()-20;


     scrollpos = window.pageYOffset/400;
     targetscrollpos = scrollpos;
     accel = 0;


    // ---- Values you can tweak: ----
     accelamount = 0.1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
     vid.pause();

});
// pause video on load


window.onscroll = function(){
    //Set the video position that we want to end up at:
    targetscrollpos = window.pageYOffset/400;

    //move the red dot to a position across the side of the screen
    //that indicates how far we've scrolled.
    scroll.css('top', 10+(window.pageYOffset/13500*windowheight));
};


setInterval(function(){

      //Accelerate towards the target:
      scrollpos += (targetscrollpos - scrollpos)*accelamount;

      //move the blue dot to a position across the side of the screen
      //that indicates where the current video scroll pos is.
      time.css('top', 10+(scrollpos/13500*400*windowheight));

      //update video playback
      vid.currentTime = scrollpos;
      vid.pause();

}, 40);
