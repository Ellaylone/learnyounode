var http = require("http");
var map = require("through2-map");

var port = Number(process.argv[2]);

function serverCallback(req, res){
    if(req.method != "POST"){
        return res.end("only POST");
    }

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
}

var server = http.createServer(serverCallback);
server.listen(port);
