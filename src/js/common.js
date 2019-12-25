import $ from "jquery"
import is from "is_js"

import "./filter.js"
import "./mobile-menu.js"


window.$ = $;
window.jQuery = $;
window.is = is;

require("./jquery.menu-aim.js");

window.get$ = (element) => {
	return $(element)
};

require("../css/jquery.fancybox.css")

require("./jquery.fancybox.js")

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch : {
  			vertical : false,
  		},
		loop: true,
		clickSlide: false,
  		clickOutside: false,
		buttons: ["fullscreen", "slideShow", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
		afterShow(){
			cardSliderInit();
		}
	});
	cardSliderInit();
});

const cardSliderInit = () => {
	const mainCardSlider = document.querySelector('.card-slider__top .swiper-list:not(.swiper-container-initialized)');
	
	if (!mainCardSlider)
		return

	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs]);

		let thumbsSlider = document.querySelector('.card-slider__thumbs .swiper-list'),
			cardSliderThumbs;

		if (thumbsSlider)
			cardSliderThumbs = new Swiper(thumbsSlider, {
				slidesPerView: 3,
				freeMode: true,
				spaceBetween: 26,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				// centeredSlides: true,
			});
	
	
	
		new Swiper(mainCardSlider, {
			effect: "fade",
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: cardSliderThumbs
			}
		});
	});
}

document.addEventListener("DOMContentLoaded", function(){
	const brandSlider = document.querySelector('.main-brands .swiper-list');
	
	if (!brandSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Lazy]);

		
		var brands = new Swiper(brandSlider, {
			slidesPerView: 7,
			preloadImages: false,
		    lazy: {
				slidesPerView: "auto",
				watchSlidesVisibility: true,
				// loadPrevNextAmount: 2,
				loadOnTransitionStart: true,
			},
			navigation: {
		        nextEl: '.main-brands .swiper-button-next',
		        prevEl: '.main-brands .swiper-button-prev',
		    },
		    breakpoints: {
			    1000: {
			      slidesPerView: 4,
			    },
			    667: {
			      slidesPerView: 2,
			      loadPrevNextAmount: 4,
			      	loadOnTransitionStart: false,
					loadPrevNext: true,
			    },
			  }


		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const instagramSlider = document.querySelector('.instagram .swiper-list');
	
	if (!instagramSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Lazy]);

		
		var instagram = new Swiper(instagramSlider, {
			slidesPerView: 4,
			spaceBetween: 26,
			preloadImages: false,
			// lazy: true,
		    lazy: {
				slidesPerView: "auto",
				watchSlidesVisibility: true,
				// loadPrevNextAmount: 2,
				loadOnTransitionStart: true,
				// loadPrevNext: true,
			},
			navigation: {
		        nextEl: '.instagram .swiper-button-next',
		        prevEl: '.instagram .swiper-button-prev',
		    },
		    breakpoints: {
			    667: {
			      slidesPerView: 2,
			      slidesPerColumn: 2,
			      lazy: {
			      	loadPrevNextAmount: 4,
			      	loadOnTransitionStart: false,
					loadPrevNext: true,
			      }
			    },
			  }
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const sliderbotSlider = document.querySelector('.slider-bot .swiper-list');
	
	if (!sliderbotSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Lazy]);

		
		var sliderbot = new Swiper(sliderbotSlider, {
			slidesPerView: 4,
			spaceBetween: 26,
			preloadImages: false,
		    lazy: {
				slidesPerView: "auto",
				watchSlidesVisibility: true,
				// loadPrevNextAmount: 2,
				loadOnTransitionStart: true,
			},
			navigation: {
		        nextEl: '.slider-bot .swiper-button-next',
		        prevEl: '.slider-bot .swiper-button-prev',
		    },
		    breakpoints: {
			    667: {
			      slidesPerView: 2,
			      slidesPerColumn: 2,
			    },
			  }
		});

	})
})





document.addEventListener("DOMContentLoaded", function(){

	const sliderSlider = document.querySelector('.slider .swiper-list');
	
	if (!sliderSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy]);

		
		var slider = new Swiper(sliderSlider, {
			effect: "fade",
			preloadImages: false,
		    lazy: {
				loadPrevNext: true,
			},
			fadeEffect: {
			    crossFade: true
			},
			loop: true,
			navigation: {
		        nextEl: '.slider .swiper-button-next',
		        prevEl: '.slider .swiper-button-prev',
		    },
		    pagination: {
		        el: '.slider .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	var banners = $('.main-slider .banners').clone();
	$('.main-catalog-cont').after("<div class='banners-cont'><div class='wrapper'></div></div>");
	$('.banners-cont .wrapper').prepend(banners);


	var allCatalog = $('.main-catalog .tabs__top .default-btn').clone();
	$('.main-catalog').append('<div class="main-catalog__btn--mobile"></div>');
	$('.main-catalog .main-catalog__btn--mobile').prepend(allCatalog);



	var cardTitle = $('.card-title').clone();
	var cardRaiting = $('.card .rating').clone();
	$('.card--left').prepend(cardRaiting);
	$('.card--left').prepend(cardTitle);

	var cardBonus = $('.card-bonus').clone();
	var cardLink = $('.card-links').clone();

	$('.card-property-cont .card-property').after(cardBonus);
	$('.card .presence').after(cardLink);



	$('.vacancy__item-top').click(function(){
		$(this).nextAll('.vacancy__item-bot').slideToggle();
		$(this).toggleClass('js__open');
	})

	$('.card-info').prevAll('.card-row').css({
		'position': 'static',
	})

	if($(window).width() < 1000){
		$('body').addClass('bx-touch');
	}

	$('.aside').prepend('<div class="aside__head">\
		<div class="aside__title">Фильтры</div>\
		<div class="burger"><span></span></div>\
		</div>');

	$('.mobile-menu__city, .mobile-menu__cities .back').click(function(){
		$('body').toggleClass('js__mobile-menu--open');
	})


	$('.filter-btn, .aside .burger').click(function(){
		$('body').toggleClass('js__open-filter');
	})

	if(window.matchMedia("(max-width: 1000px)").matches){
		$('.catalog-cat1__item-top').click(function(){
			$(this).nextAll('.catalog-cat1__elements').slideToggle();
			$(this).toggleClass('js__open');
		})

	}
	if(window.matchMedia("(max-width: 667px)").matches){
		$('.tabs__top').click(function(){
			$(this).toggleClass('js__opened');
		})

	}


	$(window).scroll(function(){
		const firstCompareItemHeader = document.querySelector(".compare__item-top");

		if (!firstCompareItemHeader)
			return;

		if (firstCompareItemHeader.getBoundingClientRect().top <= 0)
			$(".compare__item-top").addClass("js__sticked")
		else
			$(".compare__item-top").removeClass("js__sticked")
	})

	if($('.main-slider').length){
		var mainSliderHeight = $('.main-slider').height();

		console.log(mainSliderHeight)
	}

	$('.main .category-menu__list').css({
		'max-height': mainSliderHeight,
	})


});