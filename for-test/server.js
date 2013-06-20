var http = require("http");
var url = require("url");

function onRequest(request, response) {
  var parseurl = url.parse(request.url);

   var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '<script> window.onload = function(){'+
    	'console.log("window load");'+
    	'var timeId = setTimeout(function(){'+
    	'console.log("window load + timeout");'+
		'var el = document.getElementById("content");'+
		'el.innerHtml("www qqq eee");'+
		'location.hash = "megaresponse!!"'+
    '},3000);}</script>'+
    '</head>'+
    '<body>'+
    '<h1>From <script>document.write(window.location.hostname)</script></h1>'+
    '<div id="content"></div>'+
    '</form>'+
    '</body>'+
    '</html>';

  console.log("Request received for: "+parseurl.query);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

http.createServer(onRequest).listen(8000);

console.log("Server has started.");
