import domReady from "./xpage/ready";
import { sameHeights, App } from "./xpage/index";

/** Слайдер внизу страницы */
domReady(async () => {
    App.each(".default-slider", (slider: HTMLElement) => {
        window.defaultSlideInit(slider);
    })
});



window.defaultSlideInit = async (slider: HTMLElement) => {
    if (!slider) return;
    
    const {Swiper, Navigation, Pagination, Keyboard, Scrollbar, Autoplay} = await import("swiper/dist/js/swiper.esm");

    Swiper.use([Navigation, Keyboard, Pagination, Scrollbar, Autoplay])

    new Swiper(slider.querySelector(".swiper-list") as HTMLElement, {
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        spaceBetween: 40,
        autoplay: {
            delay: 5000,
        },
        // keyboard: {
        //     enabled: true,
        //     onlyInViewport: true
        // },
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     draggable: true,
        // },
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next') as HTMLElement,
            prevEl: slider.querySelector('.swiper-button-prev') as HTMLElement,
        },
        breakpoints: {
            1200: {
                spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            667: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              autoHeight: true,
              spaceBetween: 20
            },
        },
        on: {
            init(){
                sameHeights(slider, ".item__title")
                // sameHeights(slider, ".item__img")
            }
        }
    });
}