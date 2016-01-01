var fs = require('fs');
module.exports = function(path, ext, callback) {
    fs.readdir(path, function(err, data){
        if(err)
            return callback(err);
        var result = [];
        data.forEach(function(file){
            if(file.search('.' + ext) > 0)
                result.push(file);
        })
        return callback(null, result);
    });
};
