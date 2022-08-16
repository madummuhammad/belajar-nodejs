var http=require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	

	switch(request.url){
		case '/about':
		response.write("ini adalah halaman about");
		break;

		case '/profile':
		response.write("ini adalah halaman profile");
		break;

		case '/produk':
		response.write("ini adalah halaman produk");
		break;

		default:
		response.write("404: halaman tidak ditemukan");
	}
	response.end();
}).listen(8000);

console.log("Server running");