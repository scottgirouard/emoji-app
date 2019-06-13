const CSVToJSON = require('csvtojson');
const JSONToCSV = require('json2csv').parse;
const fs = require('fs');

CSVToJSON().fromFile('./emojis.csv').then(emojis => {
    console.log(emojis);
    
    const csv = JSONToCSV(emojis, { categories: ["emoji", "english", "arabic"] });
    fs.writeFileSync("./output.csv", csv);
});
    
console.log('app.js is running');

// var template = <p>emoji TESTing!!</p>;
// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);