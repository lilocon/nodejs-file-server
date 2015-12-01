var http = require("http"),
    fs = require("fs");

const root = ".";
const host = "0.0.0.0";
const port = 8888;

http.createServer(function (request, response) {
    console.log(request.url);
    var filename = root + request.url;
    fs.stat(filename, function (err, stat) {
        if (!err) {
            var stream = fs.createReadStream(filename);
            stream.pipe(response);
        } else {
            response.end("404 Not Found!");
        }
    });
}).listen(port);

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
