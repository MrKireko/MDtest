$(document).ready(function(){
    var open = false;
    
    $("#openbtn").click(function(){
        if (!open) {
            $("#cont").css("width", "50%");
            $("#cont").css("min-height", "30em");
            $("#cont").css("border-radius", "10px");
            open = true;
        }else{
            $("#cont").css("width", "5em");
            $("#cont").css("min-height", "5em");
            $("#cont").css("border-radius", "50px");
            open = false;
        }
    });
    
    $("#openbtn").mousedown(function(){
        $("#cont").css("background-color", "#e0e0e0");
    });
    
    $("#openbtn").mouseup(function(){
        $("#cont").css("background-color", "#fafafa");
    });
});