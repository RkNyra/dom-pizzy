$(document).ready(function() {
    $(".welcome img.content-img1").mouseover(function() {
        $(this).toggle("2000ms");
    });
    $(".test1").hover(function() {
        $(".test2").toggle();
    });
});