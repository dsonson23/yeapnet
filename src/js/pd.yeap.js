// Change Background Colors On Scroll

$(window).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#home").position().top) {
				$('body').css('background', $("#home").attr("data-color"));

		};
		if ($(document).scrollTop() >= $("#basic-reseller").position().top) {
				$('body').css('background', $("#basic-reseller").attr("data-color"));

		};
		if ($(document).scrollTop() > $("#pro-reseller").position().top) {
				$('body').css('background', $("#pro-reseller").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#support").position().top) {

				$('body').css('background', $("#support").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#my-account").position().top) {

				$('body').css('background', $("#my-account").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#contact").position().top) {

				$('body').css('background', $("#contact").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#footer").position().top) {

				$('body').css('background', $("#footer").attr("data-color"))
		};
});

// Fullscreen Overlay Nav
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Add smooth scrolling to the # links
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
})

//jQuery Scroll Snap

$( document ).ready(function() {
    $( '.snap' ).scrollSnap({
  speed: 400
	});
});