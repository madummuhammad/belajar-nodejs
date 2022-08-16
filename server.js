var http=require("http");

var server=http.createServer(function (request,response){

	response.writeHead(200, {'Content-Type':'text/html'});
	response.write("hello <b>World</b>");
	response.end();

});
server.listen(8000);

console.log("server running on localhost:8000");