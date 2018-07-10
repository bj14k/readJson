var app = window.app = window.app || {};

var forEach = app.collection.forEach;
var init = app.dropdown.init;

app.json = (function () {
    var styleJson = function (key, value) {
        value = typeof value !== 'undefined' ? value : '';
        return `<li class="dropdown">
                    <a data-toggle="dropdown">${key}</a>
                    <ul class="dropdown-element hide">
                        <li>${value}</li> 
                    </ul>
                </li>`;
    };

    var formatJson = function (element) {
        var result = '';

        forEach(element, (key, value) => {
            if (typeof value == 'object') {
                if (Array.isArray(value)) {
                    result += styleJson(`${key} (${value.length})`, formatJson(value));
                } else {
                    result += styleJson(key, formatJson(value));
                }
            } else {
                result += styleJson(key, value);
            }
        })

        return result;
    };


    var isJson = function (text, callback) {
        try {
            var json = JSON.parse(text);
            return callback('', json);
        } catch (err) {
            return callback(err);
        }
    };


    var parseJson = function () {
        var stringJson = document.getElementById('input').value;
        var output = document.getElementById('output');

        isJson(stringJson, (err, json) => {
            if (err) { throw err; }
            var template = `<ul>${formatJson(json)}</ul>`;
            output.innerHTML = template;
            init();
        });
    };

    return {
        parse: parseJson
    };
})();