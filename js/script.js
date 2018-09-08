/*=============SERVICES============*/
$(function () {
    new WOW().init();
});


/*=============WORKS============*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*=============TEAMS============*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items:1
            },
            480 : {
                items:2
            },
            768: {
                items:3
            }
        }
    });
});
/*=============TESTIMONIALS============*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});
/*=============STATUS============*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });
});
/*=============CLIENTS============*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items:1
            },
            480 : {
                items:3
            },
            768: {
                items:5
            },
            992 : {
                items:6
            }
        }
    });
});
/*=============NAVIGATION============*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();   
        }
    });
});

/*=============SMOOTH SCROLLING============*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*=============CLOSE MOBILE MENU ON CLICK============*/
$(function(){
$(".navbar-collapse ul li a").on("click touch",function(){
    $(".navbar-toggle").click();
});

});