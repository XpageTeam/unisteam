import Vue from "vue"
import $ from "jquery"

var mainCat, cols;

$(function(){
	if ($(window).width() <= 1000 && $(window).width() > 767)
			cols = 2;
		else if($(window).width() > 1000)
			cols = 3;
		else if ($(window).width() < 767)
			cols = 1;

	if ($("#main-cat").length)
		
		mainCat = new Vue({
			el: "#app",
			data: {
				btn_list: window.btns,
				catalog: window.catalog,
				view: 0,
				catalog_chunked: [],
				animate: true,
				cols: cols
			},
			mounted: function(){
				this.catalog_chunk()
			},
			watch: {
				view: function(val, oldVal){

					this.catalog_chunk();
				}
			},
			methods: {
				catalog_chunk: function(){
					var count = (this.filter.length/this.cols).toFixed();

					this.$set(this, "catalog_chunked", chunk(this.filter, count, true));
				}
			},
			computed: {
				filter: function() {
					var self = this;
					return this.catalog.filter(function(item) {
																		 // console.log(item["id"].indexOf(self.view));
						return (!self.view ? true : item["id"].indexOf(self.view) > -1)
					})
				}
			}
		})

});

$(window).on("resize", function(){
	if ($("#main-cat").length)
		if ($(window).width() <= 1000 && $(window).width() > 767){
			mainCat.$set(mainCat, "cols", 2);
			mainCat.catalog_chunk();
		}else if($(window).width() > 1000){
			mainCat.$set(mainCat, "cols", 3);
			mainCat.catalog_chunk();
		}else if ($(window).width() < 767){
			mainCat.$set(mainCat, "cols", 1);
			mainCat.catalog_chunk();
		}
});

function chunk (input, size, preserveKeys) { 
// eslint-disable-line camelcase
	//  discuss at: http://locutus.io/php/array_chunk/
	// original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
	// improved by: Brett Zamir (http://brett-zamir.me)
	//      note 1: Important note: Per the ECMAScript specification,
	//      note 1: objects may not always iterate in a predictable order
	//   example 1: array_chunk(['Kevin', 'van', 'Zonneveld'], 2)
	//   returns 1: [['Kevin', 'van'], ['Zonneveld']]
	//   example 2: array_chunk(['Kevin', 'van', 'Zonneveld'], 2, true)
	//   returns 2: [{0:'Kevin', 1:'van'}, {2: 'Zonneveld'}]
	//   example 3: array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2)
	//   returns 3: [['Kevin', 'van'], ['Zonneveld']]
	//   example 4: array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2, true)
	//   returns 4: [{1: 'Kevin', 2: 'van'}, {3: 'Zonneveld'}]
	var x
	var p = ''
	var i = 0
	var c = -1
	var l = input.length || 0
	var n = []
	if (size < 1) {
		return null
	}
	if (Object.prototype.toString.call(input) === '[object Array]') {
		if (preserveKeys) {
			while (i < l) {
				(x = i % size)
					? n[c][i] = input[i]
					: n[++c] = {}; n[c][i] = input[i]
				i++
			}
		} else {
			while (i < l) {
				(x = i % size)
					? n[c][x] = input[i]
					: n[++c] = [input[i]]
				i++
			}
		}
	} else {
		if (preserveKeys) {
			for (p in input) {
				if (input.hasOwnProperty(p)) {
					(x = i % size)
						? n[c][p] = input[p]
						: n[++c] = {}; n[c][p] = input[p]
					i++
				}
			}
		} else {
			for (p in input) {
				if (input.hasOwnProperty(p)) {
					(x = i % size)
						? n[c][x] = input[p]
						: n[++c] = [input[p]]
					i++
				}
			}
		}
	}
	return n
}