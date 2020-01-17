import $ from "jquery"

document.addEventListener("DOMContentLoaded", function(){

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})

	var menu = $('.head .main-nav__list').clone();
	var city = $('.head .city').clone();
	var soc = $('.head .soc').clone();
	var mail = $('.head .mail').clone();
	var phone = $('.head .phone').clone();
	var lang = $('.head-lang').clone();

	$('.mobile-menu').append(menu);
	$('.mobile-menu__footer').append(city);
	$('.mobile-menu').append(soc);
	$('.mobile-menu').append(phone);
	$('.mobile-menu__footer').append(lang);

	
	$('.main-nav__item').each(function(i, el){
		let $this = $(el);

		$this.find('.main-nav__submenu').siblings('a').addClass('js__parent-link');
		var link = $this.find('.main-nav__link.js__parent-link').clone();

		$this.find('.main-nav__submenu-list').prepend(link);
		$this.find('.main-nav__submenu-list').prepend('<div class="js__back">Назад</div>');

	})

	$('.main-nav__link.js__parent-link').click(function(){
		var $this = $(this);

		$this.toggleClass('js__submenu--open')
	})

	$('.js__back').click(function(){
		var $this = $(this);

		$this.closest('.has__submenu').find('.js__submenu--open').removeClass('js__submenu--open');

	})

	$('.mobile-menu .main-nav__item.has__submenu > a').removeAttr("href");

})