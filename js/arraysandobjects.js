'use strict'

var iterateArray = function(array, iteratee) {
	for (var i = 0; i < array.length; i++) {
		iteratee(i,array[i]);
    }
}

var iterateObject = function (obj, iteratee) {
    var keys = Object.keys(obj);
  
	for (var i = 0; i < keys.length; i++) {
    	iteratee(keys[i],obj[keys[i]]);
    }
}

var forEach = function(x, iteratee) {
  if (Array.isArray(x)) {
    iterateArray(x, function(key, value) {
  		iteratee(key,value);
	});
  } else {
	iterateObject(x, function(key,value) {
  		iteratee(key,value);
	});
  }
}

var map = function(x, iteratee) {
  var mapped = Array.isArray(x) ? [] : {};
  
  forEach(x, function(item,index){
  	mapped[index] = iteratee(item,index)
  });
  
  return mapped;
  
}

/*console.log(map({ 'x': 1 , 'y': 2 } , function(e,index) {
	return e * 2;
}))*/

/* [0,1,2,3] */
/* { 'x': 1 , 'y': 2 } */

/*forEach({ 'x': 1 , 'y': 2 }, function (e, index) {
	console.log(e);
})*/