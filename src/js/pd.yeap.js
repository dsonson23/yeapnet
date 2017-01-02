// Change Background Colors On Scroll

$(window).on("scroll touchmove", function() {
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
});