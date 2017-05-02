var viewport =
{
  height: $( window ).height(),
  width:  $( window ).width()

};
/*Sets the size of each "block" to the height of the users device, width is handled by bootstrap's container class*/
$(document).ready(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
        //add mobile video
        var video = document.getElementById('video');
        $("#video").append("<source type='video/m4v;  src='img/android.m4v' type='video/m4v'></source>")
        video.play();
    }
    else{

        //add desktop video
        var video = document.getElementById('video');
        $("#video").append("<source type='video/webm; codecs=&quot;vp8, vorbis&quot;' src='img/letschillLoop.mp4' type='video/mp4'></source>")
        video.play();
    }
    console.log("hello world");
    $("#firstBlock").css("height",viewport.height);
    $("#secondBlock").css("height",viewport.height);
    $("#secondBlock").css("margin-top",viewport.height);
    $('#video').get(0).play();
});
