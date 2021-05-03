const http = require("http");
  
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
    if(request.url == "/is-93-023"){
        response.write("<h2>Alexander Steblyanko</h2>"+
		"<p>Course: FIOT IPI</p>"+
		"<p>Group: IS-93</p>"
		);
    }
    else{
        response.write("<h2>Are you looking for anyone in particular?</h2>");
    }
    response.end();
}).listen(3000, () => { console.log('Server has been started!') } );