var fs = require('fs');
var fileName = process.argv[2];
var count = 0;
function countLines(){
    fs.readFile(fileName, 'utf8', function doneReading(error, content){
	count = content.toString().split('\n').length - 1;
	console.log(count);
    });
};
countLines();
