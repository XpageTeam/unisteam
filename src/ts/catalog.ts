import domReady from "./xpage/ready";
import App from "./xpage/core";
import { EventListener } from "./xpage/index";

domReady(async () => {
  if (window.is.touchDevice()) return;

  const select = await import("./xpage/select");

  App.each(".sort__select-select", function(el: HTMLSelectElement) {
    new select.default(el);

    el.closest(".sort__select")
      .querySelector("label")
      .classList.add("sort__select-label--selectized");
  });

  new EventListener(".filter__item-title").add("click", (el: HTMLElement) => {
	if (window.matchMedia("(min-width: 1000)").matches)
		return;
		  
	const filterItemContent = el
		.closest(".filter__item")
		.querySelectorAll("> *:not(.filter__item-title)");

    if (el.classList.contains("js__opened")) {
		window.$(filterItemContent).slideUp(300);
      	el.classList.remove("js__opened");
    } else {
		window.$(filterItemContent).slideUp(300);
      	el.classList.add("js__opened");
	}
  });
});
