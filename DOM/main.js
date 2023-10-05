$(function(){
    $(".lorem-div a").click(function(){
        $(".lorem-div a").hide();
    });
    $("#change").click(function(){
        $(".lorem-div").html("<br><p>Entonces no hay mas lorem</p>");
        $("#change").hide();
    });
    $("#mi-lista li").addClass("naranja");
    $("#bomba").click(function(){
        $(".contenedor").toggle();
        $(".fa-bomb").css({"color": "rgb(200,150,35)"});
    })
})