import $ from "jquery"
import is from "is_js"
import Cookies from "js-cookie"

import "./mobile-menu.js"
import "./stage.js"
import "./upload.js"

if (is.ie())
	require("./promise-polyfill.js");

window.$ = $;
window.jQuery = $;
window.is = is;

require("./countTo.js");

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
		
	});
});






document.addEventListener("DOMContentLoaded", function(){

	const partnersSlider = document.querySelector('.partners .swiper-list');
	
	if (!partnersSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy, Autoplay} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy, Autoplay]);

		
		var slider = new Swiper(partnersSlider, {
			slidesPerView: 6,
			lazy: true,
			autoplay: {
			    delay: 3000,
			},
      		spaceBetween: 30,
			loop: true,
			navigation: {
		        nextEl: '.partners .swiper-button-next',
		        prevEl: '.partners .swiper-button-prev',
		    },
		    pagination: {
		        el: '.partners .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		   breakpoints: {
		    // when window width is >= 320px
		    1200: {
		      slidesPerView: 4,
		      spaceBetween: 40
		    },
		    667: {
		      slidesPerView: 2,
		      spaceBetween: 30
		    },
		    480: {
		      slidesPerView: 1,
		      spaceBetween: 30
		    },
		    
		  }
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const spSliderSlider = document.querySelector('.slider-banner .swiper-list');
	
	if (!spSliderSlider)
		return

	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy]);

		
		var slider = new Swiper(spSliderSlider, {
			slidesPerView: 1,
			lazy: true,
			autoplay: {
			    delay: 3000,
			},
      		// spaceBetween: 30,
			loop: true,
			navigation: {
		        nextEl: '.slider-banner .swiper-button-next',
		        prevEl: '.slider-banner .swiper-button-prev',
		    },
		    pagination: {
		        el: '.slider-banner .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})



document.addEventListener("DOMContentLoaded", function(){

	const sliderSlider = document.querySelector('.slider-row .swiper-list');
	
	if (!sliderSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy, Autoplay} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy, Autoplay]);

		
		var slider = new Swiper(sliderSlider, {
			slidesPerView: 6,
			lazy: true,
      		// spaceBetween: 3,
			loop: true,
			navigation: {
		        nextEl: '.slider-row .swiper-button-next',
		        prevEl: '.slider-row .swiper-button-prev',
		    },
		    pagination: {
		        el: '.slider-row .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		    breakpoints: {
			    // when window width is >= 320px
			    1000: {
			      slidesPerView: 4,
			    },
			    667: {
			      slidesPerView: 4,
			    },
			    480: {
			      slidesPerView: 3,
			    },
			   
			  }
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const newsSlider = document.querySelector('.news .swiper-list');
	
	if (!newsSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, Pagination, Autoplay, Lazy} = Module;

		Swiper.use([Navigation, Pagination, Autoplay, Lazy]);

		
		var slider = new Swiper(newsSlider, {
			slidesPerView: 3,
			lazy: true,
			autoplay: {
			    delay: 3000,
			},
      		spaceBetween: 40,
      		roundLengths: true,
			// loop: true,
			navigation: {
		        nextEl: '.news .swiper-button-next',
		        prevEl: '.news .swiper-button-prev',
		    },
		    pagination: {
		        el: '.news .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		        dynamicBullets: true,
		        dynamicMainBullets: 2,
		    },
		    breakpoints: {
			    // when window width is >= 320px
			    1000: {
			      slidesPerView: 2,
			      spaceBetween: 20
			    },
			    670: {
			      slidesPerView: 2,
			      spaceBetween: 20
			    },
			    480: {
			      slidesPerView: 1,
			      spaceBetween: 20
			    },
			    // when window width is >= 480px
		  	}
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const reviewSlider = document.querySelector('.review .swiper-list');
	
	if (!reviewSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, Pagination, Lazy} = Module;

		Swiper.use([Navigation, Pagination, Lazy]);

		
		var slider = new Swiper(reviewSlider, {
			slidesPerView: 1,
			lazy: true,
			autoplay: {
			    delay: 4000,
			},
      		spaceBetween: 40,
			loop: true,
			navigation: {
		        nextEl: '.review .swiper-button-next',
		        prevEl: '.review .swiper-button-prev',
		    },
		    pagination: {
		        el: '.review .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const mainCardSlider = document.querySelector('.card__media-top .swiper-list');
	
	if (!mainCardSlider)
		return

	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs]);

		let thumbsSlider = document.querySelector('.card__media-bot .swiper-list'),
			cardSliderThumbs;

		if (thumbsSlider)
			cardSliderThumbs = new Swiper(thumbsSlider, {
				slidesPerView: 3,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				
			});
	
	
	
		new Swiper(mainCardSlider, {
			effect: "fade",
			
			fadeEffect: {
				    crossFade: true
				},
			navigation: {
				nextEl: '.card__media-bot .swiper-button-next',
				prevEl: '.card__media-bot .swiper-button-prev',
			},
			thumbs: {
				swiper: cardSliderThumbs
			},
			breakpoints: {

			    670: {
					autoHeight: true,
			    	
			    },
			}
			  
		});
	});

})


	
document.addEventListener("DOMContentLoaded", function(){

	setTimeout(function(){
		$('body').removeClass('loading');
		$('body').addClass('loaded');
	},2000)

	$('body.index').removeClass('main');

	$('.js__view-plates .catalog__item-title').height(Math.max.apply(null, $('.js__view-plates .catalog__item-title').map(function(){
		return $(this).height();
	})))


	$('.p-404').closest('body').addClass('page-404');

	// $('.details__one').removeClass('active');
	$('.details__one-label').click(function(){
		// $(this).siblings('.details__one-text').slideToggle();
		$(this).toggleClass('js__open');

	});

	$('.tabs__title').click(function(){

		var $this = $(this);

		$('.tabs__title').removeClass('js__active');

		if ($this.next('.tabs__content-content').hasClass("js__open")){
			$('.tabs__content-content').slideUp(300).removeClass('js__open');
		}else{
			$('.tabs__content-content').slideUp(300).removeClass('js__open');
			$this.next('.tabs__content-content').slideDown(300).addClass('js__open');
			$this.addClass('js__active');
		}

	})


});


$(window).on('scroll load', function(){
	if ($(".statistic__item-num").length)
		if ($(".statistic__item-num").offset().top + 50 <=
			$(window).scrollTop() + $(window).height()){
				$(".statistic__item-num:not(.countered)").each((i, el) => {
					let $this = $(el)

					$this.width($this.width())

					$this.countTo({
						speed: 3000
					});

					console.log($this);

					$this.addClass("countered");
				});
		}

})