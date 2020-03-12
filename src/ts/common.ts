import { domReady, App, sameHeights, EventListener } from "./xpage/index";
import "./main-slider/main-top-slider";
import "./default-slider";
import "./forms";
import "./textPage/text-page";

import "./tabs";


declare global {
	interface Window {
		$: Function;
		is: any;
		requestIdleCallback: Function;
		cancelIdleCallback: Function;
		defaultSlideInit: Function;
		swiperThumbsReady: any;
		notificator: any
	}
}

domReady(() => {

	if (!window.is.touchDevice())
		(async function(){
			const select = await import ("./xpage/select");
			App.each(".my-select", function(el: HTMLSelectElement) {
				new select.default(el);
			});
		})();

	/** Установка одинаковых высот для заголовков карточек каталог на главной */
	;(function() {
		const mainCatalogListg = App.getElement(".main-catalog__list");

		if (!mainCatalogListg) return;

		sameHeights(mainCatalogListg, ".item__title");
	})();

	new EventListener(".sort__select-label--selectized").add("click", function(
		el: HTMLElement
	) {
		const select = el
			.closest(".sort__select")
			.querySelector(".sort__select-select") as HTMLSelectElement;

		if (!select) return;

		if (!select.mySelect) return

		enum selectState{
			opened,
			closed
		}

		select.mySelect.open();
		select.mySelect._curState = selectState.closed;

		setTimeout(() => {
			select.mySelect._curState = selectState.opened;
		}, 100)
	});
});
