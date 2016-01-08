var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var file = process.argv[3];

function serverCallback(req, res){
    res.writeHead(200, { "content-type": "text-plain" });
    fs.createReadStream(file).pipe(res);
}

var server = http.createServer(serverCallback);
server.listen(port);
