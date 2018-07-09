'use strict'

function initDropdowns() {
	var dropdowns = document.getElementsByClassName('dropdown')
	forEach(dropdowns,(i, dropdown) => {
		var button = dropdown.querySelector('a[data-toggle="dropdown"]');
		var element = dropdown.querySelector('.dropdown-element');
		button.onclick = function(event) {
			if(!element.hasClass('show')) {
				element.classList.add('show');
				element.classList.remove('hide');
			}
			else {
				element.classList.remove('show');
				element.classList.add('hide');
			}
		}
	})
}

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};