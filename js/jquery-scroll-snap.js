!function(t){t.fn.scrollSnap=function(o){function e(o,e,n){if(!t("body").hasClass("lock-scroll")){var s=t(window).height();n="undefined"!=typeof n?n:"up";var a=!1;o.each(function(){(e<=t(this).offset().top&&("down"==n&&e>=t(this).offset().top-2*s/3||"up"==n&&e>=t(this).offset().top-s/3)||e>=t(this).offset().top&&("up"==n&&e<=t(this).offset().top+2*s/3||"down"==n&&e<=t(this).offset().top+s/3))&&(t("body:not( .lock-scroll )").addClass("lock-scroll"),a=t(this).offset().top)}),a!==!1&&t("html, body").animate({scrollTop:a},i.speed,function(){t("body.lock-scroll").removeClass("lock-scroll")})}}var n,i=t.extend({speed:400},o),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,a=this;t(window).on("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,o="up";t>s&&(o="down"),s=t,clearTimeout(n),n=setTimeout(function(){e(a,t,o)},200)})}}(jQuery);