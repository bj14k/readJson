var app = window.app = window.app || {};

var forEach = app.collection.forEach;

app.dropdown = (function () {
	var hasClass = function (element, className) {
		return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
	};

	var initDropdowns = function () {
		var dropdowns = document.getElementsByClassName('dropdown')
		forEach(dropdowns, (i, dropdown) => {
			var button = dropdown.querySelector('a[data-toggle="dropdown"]');
			var element = dropdown.querySelector('.dropdown-element');
			button.onclick = function (event) {
				if (!hasClass(element, 'show')) {
					element.classList.add('show');
					element.classList.remove('hide');
				}
				else {
					element.classList.remove('show');
					element.classList.add('hide');
				}
			}
		})
	};

	return {
		init: initDropdowns
	};
})();