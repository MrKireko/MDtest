$(document).ready(function(){
    
    var vid = document.getElementById("vid");
    var vidq = $("#vidwrap");
    var ctrl = $("#ctrl");
    var pause = $("#pause");
    var ffw = $("#ffw");
    
    pause.click(function(){
        if(vid.paused){
            vid.play();
            pause.html("<i class='fa fa-pause'></i>")
        }else{
            vid.pause();
            pause.html("<i class='fa fa-play'></i>")
        }
    });
    
    ffw.click (function(){
        vid.currentTime = 20;
    });
    
//    vidq.mouseenter(function(){
//        ctrl.css("opacity", "1");
//    });
//    vidq.mouseleave(function(){
//        ctrl.css("opacity", "0");
//    });
    
});