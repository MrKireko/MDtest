$(document).ready(function(){
    var open = false;
    var openm = false;
    
    $("#openbtn").click(function(){
        if (!open) {
            $("#cont").css("width", "50%");
            $("#cont").css("min-height", "30em");
            $("#cont").css("border-radius", "10px");
            $("#txt").css("opacity", "0.87");
            open = true;
        }else{
            $("#cont").css("width", "5em");
            $("#cont").css("min-height", "5em");
            $("#cont").css("border-radius", "50px");
            $("#txt").css("opacity", "0");
            open = false;
        }
    });
    
    $("#openbtn").mousedown(function(){
        $("#cont").css("background-color", "#e0e0e0");
    });
    
    $("#openbtn").mouseup(function(){
        $("#cont").css("background-color", "#fafafa");
    });
    
    $("#openm").click(function(){
        if (!openm) {
            $("#wrap").css("transform", "rotate(10deg) scale(0.95)");
            $("body").css("overflow", "hidden");
            $("#openm").html("CLOSE");
            openm = true;
        }else{
            $("#wrap").css("transform", "rotate(0deg) scale(1)");
            setTimeout(function(){ $("body").css("overflow", "visible"); }, 201);
            $("#openm").html("OPEN");
            openm = false;
        }
    });
    
    $("#btn").mouseenter(function(){
        $("#btnbg").css("animation", "ripple 1.5s infinite");
    });
    
    $("#btn").mouseleave(function(){
        $("#btnbg").css("animation", "none");
    });
});