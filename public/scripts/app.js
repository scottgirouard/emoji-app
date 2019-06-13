'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSVToJSON = require('csvtojson');
var JSONToCSV = require('json2csv').parse;
var fs = require('fs');

CSVToJSON().fromFile('./emojis.csv').then(function (emojis) {
    console.log(emojis);

    var csv = JSONToCSV(emojis, { categories: ["emoji", "english", "arabic"] });
    fs.writeFileSync("./output.csv", csv);
});

console.log('app.js is running');

// var template = <p>emoji TESTing!!</p>;
// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
