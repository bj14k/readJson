'use strict'

function styleJson(key,value) {
    value = typeof value !== 'undefined' ? value : '';
    return `<div>${key}: ${value}</div>`;
}

function formatJson(element) {
    var result = '';

    forEach(element, (key, value) => {
        console.log(key, value)
        if( typeof value == 'object' ) {
            if(Array.isArray(value)) {
                result += styleJson(key) + formatJson(value);
            } else {
                result +=  styleJson(key,formatJson(value));
            }
        } else {
            result += styleJson(key,value);
        }
    })

    return result;
}


function isJson(text,callback) {
    try {
        var json = JSON.parse(text);
        return callback('',json);
    } catch(err) {
        return callback(err);
    }
}


function parseJson() {
    var stringJson = document.getElementById('input').value;
    var output = document.getElementById('output');

    isJson(stringJson, (err,json) => {
        if(err) { throw err; }
        output.innerHTML = formatJson(json); 
    });
}
