/*
Template: Streamit - Responsive Bootstrap 4 Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Sticky Header Animation & Height
:: Back to Top
:: Header Menu Dropdown
:: Owl Carousel
:: Page Loader
:: Mobile Menu Overlay
:: Equal Height of Tab Pane
:: Active Class for Pricing Table
:: Select 2 Dropdown
:: Video Popup
:: Flatpicker
:: Custom File Uploader
:: RTL Mode

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {
	"use strict";

	jQuery(document).ready(function() {

		function activaTab(pill) {
			jQuery(pill).addClass('active show');
		}

		/*---------------------------------------------------------------------
			Sticky Header Animation & Height
		----------------------------------------------------------------------- */
		function headerHeight() {
			var height = jQuery("#main-header").height();
			jQuery('.iq-height').css('height', height + 'px');
		}
		jQuery(function() {
			var header = jQuery("#main-header"),
				yOffset = 0,
				triggerPoint = 80;

			headerHeight();

			jQuery(window).resize(headerHeight);
			jQuery(window).on('scroll', function() {

				yOffset = jQuery(window).scrollTop();

				if (yOffset >= triggerPoint) {
					header.addClass("menu-sticky animated slideInDown");
				} else {
					header.removeClass("menu-sticky animated slideInDown");
				}

			});
		});
		
		/*---------------------------------------------------------------------
			Back to Top
		---------------------------------------------------------------------*/
		var btn = $('#back-to-top');
		$(window).scroll(function () {
			if ($(window).scrollTop() > 50) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});
		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});

		/*---------------------------------------------------------------------
			Header Menu Dropdown
		---------------------------------------------------------------------*/
		jQuery('[data-toggle=more-toggle]').on('click', function() {
			jQuery(this).next().toggleClass('show');
		});

		jQuery(document).on('click', function(e) {
			let myTargetElement = e.target;
			let selector, mainElement;
			if (jQuery(myTargetElement).hasClass('search-toggle') || jQuery(myTargetElement).parent().hasClass('search-toggle') || jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
				if (jQuery(myTargetElement).hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent();
					mainElement = jQuery(myTargetElement);
				} else if (jQuery(myTargetElement).parent().hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent().parent();
					mainElement = jQuery(myTargetElement).parent();
				} else if (jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
					selector = jQuery(myTargetElement).parent().parent().parent();
					mainElement = jQuery(myTargetElement).parent().parent();
				}
				if (!mainElement.hasClass('active') && jQuery(".navbar-list li").find('.active')) {
					jQuery('.navbar-right li').removeClass('iq-show');
					jQuery('.navbar-right li .search-toggle').removeClass('active');
				}

				selector.toggleClass('iq-show');
				mainElement.toggleClass('active');

				e.preventDefault();
			} else if (jQuery(myTargetElement).is('.search-input')) {} else {
				jQuery('.navbar-right li').removeClass('iq-show');
				jQuery('.navbar-right li .search-toggle').removeClass('active');
			}
		});

		// ------------------------------------------------------------
		// ------------------------------------------------------------
		jQuery('.iq-accordion .iq-accordion-block .iq-accordion-details').hide();
		jQuery('.iq-accordion .iq-accordion-block:first').addClass('iq-active').children().slideDown('slow');
		jQuery('.iq-accordion .iq-accordion-block').on("click", function() {
			if (jQuery(this).children('div.iq-accordion-details').is(':hidden')) {
				jQuery('.iq-accordion .iq-accordion-block').removeClass('iq-active').children('div.iq-accordion-details').slideUp('slow');
				jQuery(this).toggleClass('iq-active').children('div.iq-accordion-details').slideDown('slow');
			}
		});

		
		/*---------------------------------------------------------------------
			Owl Carousel
		----------------------------------------------------------------------- */
		jQuery('.episodes-slider1').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
			dots:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:4
				}
			}
		});
		jQuery('.episodes-slider2').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
			dots:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});
		
		
		/*---------------------------------------------------------------------
			Page Loader
		----------------------------------------------------------------------- */
		jQuery("#load").fadeOut();
		jQuery("#loading").delay(0).fadeOut("slow");
		
		jQuery('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		});

		/*---------------------------------------------------------------------
		Mobile Menu Overlay
		----------------------------------------------------------------------- */
		jQuery(document).on("click", function(event){
	    var $trigger = jQuery(".main-header .navbar");
	    if($trigger !== event.target && !$trigger.has(event.target).length){
			jQuery(".main-header .navbar-collapse").collapse('hide');
			jQuery('body').removeClass('nav-open');
	    }            
		});
		jQuery('.c-toggler').on("click", function(){
			jQuery('body').addClass('nav-open');
		}); 

		/*---------------------------------------------------------------------
		  Equal Height of Tab Pane
		-----------------------------------------------------------------------*/		
		jQuery('.trending-content').each(function () {			
			var highestBox = 0;			
			jQuery('.tab-pane', this).each(function () {				
				if (jQuery(this).height() > highestBox) {
					highestBox = jQuery(this).height();
				}
			});			 
			jQuery('.tab-pane', this).height(highestBox);
		}); 

		/*---------------------------------------------------------------------
	 		Active Class for Pricing Table
  	 	-----------------------------------------------------------------------*/
		jQuery("#my-table tr th").on("click", function (){
			jQuery('#my-table tr th').children().removeClass('active');
			jQuery(this).children().addClass('active');
			jQuery("#my-table td").each(function () {
				if (jQuery(this).hasClass('active')) {
					jQuery(this).removeClass('active')
				}
			});
			var col = jQuery(this).index();
			jQuery("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
		});
		
		/*---------------------------------------------------------------------
			Select 2 Dropdown
		-----------------------------------------------------------------------*/
		if (jQuery('select').hasClass('season-select')){
			jQuery('select').select2({
				theme: 'bootstrap4',
				allowClear: false,
				width: 'resolve'
			});
		}
		if (jQuery('select').hasClass('pro-dropdown')) {			
			jQuery('.pro-dropdown').select2({
				theme: 'bootstrap4',			
				minimumResultsForSearch: Infinity,			
				width: 'resolve'
			});	
			jQuery('#lang').select2({
				theme: 'bootstrap4',
				placeholder: 'Language Preference',
				allowClear: true,
				width: 'resolve'
			});
		}

		/*---------------------------------------------------------------------
			Video popup
		-----------------------------------------------------------------------*/
		jQuery('.video-open').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'</div>',

				srcAction: 'iframe_src',
			}
		});

		/*---------------------------------------------------------------------
			Flatpicker
		-----------------------------------------------------------------------*/
		if (jQuery('.date-input').hasClass('basicFlatpickr')) {
			jQuery('.basicFlatpickr').flatpickr();
		}
		/*---------------------------------------------------------------------
			Custom File Uploader
		-----------------------------------------------------------------------*/
		jQuery(".file-upload").on("change", function () {
			! function (e) {
				if (e.files && e.files[0]) {
					var t = new FileReader;
					t.onload = function (e) {
						jQuery(".profile-pic").attr("src", e.target.result)
					}, t.readAsDataURL(e.files[0])
				}
			}(this)
		}), jQuery(".upload-button").on("click", function () {
			jQuery(".file-upload").click();
		});
		// new WOW().init();
		// var swiper = new Swiper('.swiper-container', {
		// 	effect: 'fade',
		// 	grabCursor: true,
		// 	centeredSlides: false,
		// 	slidesPerView: 'auto',
		// 	freeMode: true,
		// 	loop: true,
		// 	parallax: true,
		// 	on: {
		// 		slideChangeTransitionEnd: function () {
		// 			$('.aos-slide').show(0);
		// 			AOS.init();
		// 		},
		// 		slideChangeTransitionStart: function () {
		// 			$('.aos-slide').hide(0);
		// 			$('.aos-slide').removeClass('aos-init').removeClass('aos-animate');
					
		// 		},
		// 	},
		// 	pagination: {
		// 		el: '.swiper-pagination',
		// 	},
		// 	navigation: {
		// 		nextEl: '.swiper-button-next',
		// 		prevEl: '.swiper-button-prev',
		// 	},
		// });
	
		// AOS.init();	
		$(".iq-price-rate-wrap").click(function(){
			$(".iq-price-rate-wrap").removeClass("active")
			$(this).addClass("active");
		  });
	});
})(jQuery);

