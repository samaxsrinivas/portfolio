$(function() {

    $("#pageTitle").hide().fadeIn(2000);

    $("#name").hide().fadeIn(2000);

    $("#welcome").hide().fadeIn(4000);

});

$(document).ready(function() {
    $("#button1").click(function() {
        $(".skills1").toggle();
    });
    $("#button2").click(function() {
        $(".skills2").toggle();
    });
    $("#button3").click(function() {
        $(".skills3").toggle();
    });
});


$(document).ready(function() {
    $("p").on({
        mouseenter: function() {
            $(this).css("background-color", "orange");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        }
    });
});


function myFunction(x) {
    x.classList.toggle("change");

    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.toggle("show");
}