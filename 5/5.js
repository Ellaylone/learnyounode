var fs = require("fs");
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data){
    for(var i = 0; i < data.length; i++){
        if(data[i].search("." + ext) > 0){
            console.log(data[i]);
        }
    }
});
