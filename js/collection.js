var app = window.app = window.app || {};

// IIFE - Immediately Invoked Function Expression
// Collection: Array and Object
app.collection = (function () {
	var iterateArray = function (array, iteratee) {
		for (var i = 0; i < array.length; i++) {
			iteratee(i, array[i]);
		}
	}

	var iterateObject = function (obj, iteratee) {
		var keys = Object.keys(obj);

		for (var i = 0; i < keys.length; i++) {
			iteratee(keys[i], obj[keys[i]]);
		}
	}

	var forEach = function (x, iteratee) {
		if (Array.isArray(x)) {
			iterateArray(x, function (key, value) {
				iteratee(key, value);
			});
		} else {
			iterateObject(x, function (key, value) {
				iteratee(key, value);
			});
		}
	}

	var map = function (x, iteratee) {
		var mapped = Array.isArray(x) ? [] : {};

		forEach(x, function (item, index) {
			mapped[index] = iteratee(item, index)
		});

		return mapped;
	}

	return {
		forEach: forEach,
		map: map
	};
})();