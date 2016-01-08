var net = require("net");
var port = process.argv[2];

function pad(num, size) {
    var s = num + "";
    while(s.length < size) s = "0" + s;
    return s;
}

function serverCallback(socket) {
    var date = new Date();
    var data = date.getFullYear() + "-";
    data += pad(date.getMonth() + 1, 2) + "-";
    data += pad(date.getDate(), 2) + " ";
    data += date.getHours() + ":";
    data += date.getMinutes() + "\n";
    socket.end(data);
}

var server = net.createServer(serverCallback);
server.listen(port);
