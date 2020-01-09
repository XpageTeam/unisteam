import $ from "jquery"
import is from "is_js"

// import "./filter.js"
// import "./mobile-menu.js"
import "./main-cat.js"


window.$ = $;
window.jQuery = $;
window.is = is;

require("./jquery.menu-aim.js");
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

	const sliderSlider = document.querySelector('.main-slider .swiper-list');
	
	if (!sliderSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy]);

		
		var slider = new Swiper(sliderSlider, {
			effect: "fade",
			parallax: true,
			
			fadeEffect: {
			    crossFade: true
			},
			loop: true,
			navigation: {
		        nextEl: '.main-slider .swiper-button-next',
		        prevEl: '.main-slider .swiper-button-prev',
		    },
		    pagination: {
		        el: '.main-slider .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const partnersSlider = document.querySelector('.partners .swiper-list');
	
	if (!partnersSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy]);

		
		var slider = new Swiper(partnersSlider, {
			slidesPerView: 6,
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
		});

	})
})

document.addEventListener("DOMContentLoaded", function(){

	const newsSlider = document.querySelector('.news .swiper-list');
	
	if (!newsSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, Pagination} = Module;

		Swiper.use([Navigation, Pagination]);

		
		var slider = new Swiper(newsSlider, {
			slidesPerView: 3,
			autoplay: {
			    delay: 300,
			 },
      		spaceBetween: 40,
			loop: true,
			navigation: {
		        nextEl: '.news .swiper-button-next',
		        prevEl: '.news .swiper-button-prev',
		    },
		    pagination: {
		        el: '.news .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){

	const reviewSlider = document.querySelector('.review .swiper-list');
	
	if (!reviewSlider)
		return


	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, Pagination} = Module;

		Swiper.use([Navigation, Pagination]);

		
		var slider = new Swiper(reviewSlider, {
			slidesPerView: 1,
			autoplay: {
			    delay: 300,
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



});


$(window).on('scroll load', function(){
	if ($(".statistic__item-num").length)
		if ($(".statistic__item-num").offset().top + 50 <=
			$(window).scrollTop() + $(window).height()){
				$(".statistic__item-num:not(.countered)").each((i, el) => {
					let $this = $(el),
						speed = 0;

					switch (i){
						case 0:
							speed = 4000;
						break;
						case 1:
							speed = 2000;
						break;

						default:
							speed = 3000;
					}

					$this.width($this.width())

					$this.countTo({
						speed: speed,
						onComplete(){
							$this.width("auto")
						}
					});

					$this.addClass("countered");
				});
		}

})