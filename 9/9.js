var http = require("http");
var urls = process.argv.slice(2,5);
var results = [];
var i = 0;

for (i = 0; i < urls.length; i++) {
    results[i] = null;
};

for (i = 0; i < urls.length; i++) {
    (function(i){
        http.get(urls[i], function(req){
            var result = "";
            req.setEncoding("utf8");
            req.on("data", function(data){
                result += data;
            });
            req.on("end", function(){
                results[i] = result;
                var resultCount = 0;
                for(j = 0; j < results.length; j++) {
                    if(results[j] != null) resultCount++;
                }
                if(resultCount == results.length) {
                    for(j = 0; j < results.length; j++) {
                        console.log(results[j]);
                    }
                }
            });
        });
    })(i);
};
