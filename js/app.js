$(document).ready(function() {
    //Tooltips
    $(".tip_trigger").hover(function() {
        tip = $(this).find('.tip');
        tip.show(); //Show tooltip
    }, function() {
        tip.hide(); //Hide tooltip        
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coodrinates
        var mousey = e.pageY + 20; //Get Y coordinates
        var tipWidth = tip.width(); //Find width of tooltip
        var tipHeight = tip.height(); //Find height of tooltip

        //Distance of element from the right edge of viewport
        var tipVisX = $(window).width() - (mousex + tipWidth);
        //Distance of element from the bottom of viewport
        var tipVisY = $(window).height() - (mousey + tipHeight);

        if (tipVisX < 20) { //If tooltip exceeds the X coordinate of viewport
            mousex = e.pageX - tipWidth - 20;
        }
        if (tipVisY < 20) { //If tooltip exceeds the Y coordinate of viewport
            mousey = e.pageY - tipHeight + 50;
        }
        tip.css({ top: mousey, left: mousex });
    });
});



$(document).ready(function() {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function() {
                $(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function() {
                $(this).removeClass("hover");
            });
    }
});



$(function() {
    $("#accordion").accordion({
        heightStyle: "content"
    });
});