'use strict';

console.log('app.js is running');

var template = React.createElement(
  'p',
  null,
  'emoji TESTing!!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
