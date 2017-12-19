

$(document).ready(function(){


/////SMOOTH SCROLL/////////////////////////////////////////////




/////TO OPEN: NO SCROLL ON BODY/////////////////////////////////////////////

$(".primary-link-contact").click(function(){
$("#body").addClass("body-hidden");
});

/////TO OPEN: DISPLAY OF CONTACT MODULE/////////////////////////////////////////////

$(".primary-link-contact").click(function(){
    $("#background-contact").removeClass("background-contact-closed");
});


/////TO CLOSE: SCROLL BACK ON BODY/////////////////////////////////////////////

$("#contact-close-btn").click(function(){
$("#body").removeClass("body-hidden");
});

/////TO CLOSE: HIDE CONTACT MODULE/////////////////////////////////////////////

$("#contact-close-btn").click(function(){
    $("#background-contact").addClass("background-contact-closed");
});

});
