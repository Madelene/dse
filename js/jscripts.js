$(function() {

	"use strict";

	var topoffset = 50;
	var numgalleryitems = $('#gallery .item').length;
	var window_height = $(window).height(); //get the window height

	$('.fullheight').css('height', window_height);

	$('#gallery .item img').each(function() {
		var img_src = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+img_src+')'});
		$(this).remove();
	});


	//Enable Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	})


	//Enable smooth scrolling
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') ===
			this.pathname.replace(/^\//,'') &&
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
				}, 700);
				return false;
			} //target.length
		} //click function
	}); //smooth scroll


	//Automatically generate carousel indicators based on quantity
	//of slides in the carousel
	for (var i=0; i < numgalleryitems; i++) {
		var insertliText = '<li data-target="#gallery" data-slide-to="' + i + '"></li>';
		$('#gallery ol').append(insertliText);
	}


	$('#gallery').carousel({
		interval: false
	});


});
