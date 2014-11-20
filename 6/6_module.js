var fs = require('fs');
var path = require('path');
module.exports = function (args){
    function findFiles(err, files){
	if(err === null){
	    for(var i = 0; i < files.length; i++){
		if(path.extname(files[i]) === '.' + args[1]){
		    console.log(files[i]);
		}
	    }
	} else {
	    console.log(err);
	    console.log('File error');
	}
    };
    fs.readdir(args[0], findFiles);
};
