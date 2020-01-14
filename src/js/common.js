import $ from "jquery"
import is from "is_js"
import Cookies from "js-cookie"

// import "./filter.js"
// import "./mobile-menu.js"
import "./main-cat.js"
import "./stage.js"


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

	const spSliderSlider = document.querySelector('.slider-banner .swiper-list');
	
	if (!spSliderSlider)
		return

	import("swiper/dist/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Thumbs, Pagination, Lazy} = Module;

		Swiper.use([Navigation, EffectFade, Thumbs, Pagination, Lazy]);

		
		var slider = new Swiper(spSliderSlider, {
			slidesPerView: 1,
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
      		spaceBetween: 3,
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
      		roundLengths: true,
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



	const cardSliderInit = () => {
		const mainCardSlider = document.querySelector('.card__media-top .swiper-list:not(.swiper-container-initialized)');
		
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
					// freeMode: true,
					spaceBetween: 20,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					// centeredSlides: true,
				});
		
		
		
			new Swiper(mainCardSlider, {
				effect: "fade",
				navigation: {
					nextEl: '.card__media-top .swiper-button-next',
					prevEl: '.card__media-top .swiper-button-prev',
				},
				thumbs: {
					swiper: cardSliderThumbs
				}
			});
		});
	}

	
document.addEventListener("DOMContentLoaded", function(){


	cardSliderInit();

	$('.view-item').click(function(){
		let $this = $(this);

		if($this.hasClass('active'))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".catalog");

		Cookies.remove('view-list');
		Cookies.remove('view-plates');
		Cookies.set(""+id+"", 1, { expires: 1 });





		$parent.find(".view-item.active").removeClass("active");
		$parent.find(".catalog__list.js__view-list").removeClass("js__view-list");
		$parent.find(".catalog__list.js__view-plates").removeClass("js__view-plates");

		$this.addClass("active");
		$parent.find(".catalog__list").addClass("js__"+id+"");

	})



	if(Cookies.get('view-list')){
		$(".catalog__list").addClass("js__view-list");
		$('.view-item').removeClass('active');
		$('.view-list').addClass('active');
	} else {
		$(".catalog__list").addClass("js__view-plates");
	}


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