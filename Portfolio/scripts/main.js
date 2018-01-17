

$(document).ready(function(){


/////SMOOTH SCROLL/////////////////////////////////////////////




/////TO OPEN CONTACT: NO SCROLL ON BODY/////////////////////////////////////////////

$(".primary-link-contact").click(function(){
$("#body").addClass("body-hidden");
});

/////TO OPEN CONTACT: DISPLAY OF CONTACT MODULE/////////////////////////////////////////////

$(".primary-link-contact").click(function(){
    $("#background-contact").removeClass("background-contact-closed");
});


/////TO CLOSE CONTACT: SCROLL BACK ON BODY/////////////////////////////////////////////

$("#contact-close-btn").click(function(){
$("#body").removeClass("body-hidden");
});

/////TO CLOSE CONTACT: HIDE CONTACT MODULE/////////////////////////////////////////////

$("#contact-close-btn").click(function(){
    $("#background-contact").addClass("background-contact-closed");
});



/////TO OPEN ABOUT: NO SCROLL ON BODY/////////////////////////////////////////////

$(".primary-link-about").click(function(){
$("#body").addClass("body-hidden");
});

/////TO OPEN ABOUT: DISPLAY OF CONTACT MODULE/////////////////////////////////////////////

$(".primary-link-about").click(function(){
    $("#background-about").removeClass("background-about-closed");
});


/////TO CLOSE ABOUT: SCROLL BACK ON BODY/////////////////////////////////////////////

$("#about-close-btn").click(function(){
$("#body").removeClass("body-hidden");
});

/////TO CLOSE ABOUT: HIDE CONTACT MODULE/////////////////////////////////////////////

$("#about-close-btn").click(function(){
    $("#background-about").addClass("background-about-closed");
});


/////NAV ON IOTA/////////////////////////////////////////////

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


});
