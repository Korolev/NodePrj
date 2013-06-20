var http = require("http");
var url = require("url");

function onRequest(request, response) {
  var parseurl = url.parse(request.url);

  console.log("Request received for: "+parseurl.query);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World "+parseurl.pathname+" query"+parseurl.query);
  response.end();
}

http.createServer(onRequest).listen(8000);

console.log("Server has started.");
