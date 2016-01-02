var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World, you son of bitch");
  response.end();
}).listen(process.env.PORT || 8888);
