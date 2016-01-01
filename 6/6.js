var path = process.argv[2];
var ext = process.argv[3];
var module6 = require('./module6.js');

module6(path, ext, function(err, data){
    if(err)
        return console.error('Error: ', err);

    data.forEach(function(file){
        console.log(file);
    });
});
