$(document).ready(function(){
    $("#wrapper .img").click(function(){
        $(this).hide()
    });
    $("button").click(function(){
        $("#wrapper .img").show()
    });
});