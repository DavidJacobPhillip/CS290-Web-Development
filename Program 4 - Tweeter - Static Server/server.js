/*
 * Write your server code in this file.
 *
 * name: Santosh Ramesh
 * email: rameshsa@oregonstate.edu
 */

// importing the node modules
var http = require('http');
var fs = require('fs');

// reading in the files from the "public" folder
var index_html = fs.readFileSync('public/index.html', 'utf8', function(err, data){
        if (err){
            console.log("Error reading file", err);
        } else{
            console.log("reading index.html");
        }
    }); 

var index_js = fs.readFileSync('public/index.js', 'utf8', function(err, data){
        if (err){
            console.log("Error reading file", err);
        } else{
            console.log("reading index.js");
        }
    }); 

var style_css = fs.readFileSync('public/style.css', 'utf8', function(err, data){
         if (err){
            console.log("Error reading file", err);
        } else{
            console.log("reading style.css");
        }
    }); 

var fourzerofour_html = fs.readFileSync('public/404.html', 'utf8', function(err, data){     
        if (err){
            console.log("Error reading file", err);
        } else{
            console.log("reading 404.html");
        }
    }); 

// creating the server
var server = http.createServer(function(req, res){
    console.log("Got a request");
    console.log(" -- HTTP method:", req.method);
    console.log(" -- Resource:", req.url);
    console.log(" -- Headers:", req.headers);
    
    if (req.url == "/index.html" || req.url == "/" ){
        res.writeHead(200, {
            "Content-Type": "text/html" 
        });
        res.write(index_html);   
    } else if (req.url == "/style.css"){
        res.writeHead(200, {
            "Content-Type": "text/css" 
        });
        res.write(style_css); 
    } else if (req.url == "/index.js"){
        res.writeHead(200, {
            "Content-Type": "application/javascript" 
        });
        res.write(index_js); 
    } else if (req.url == "/404.html"){
        res.writeHead(200, {
            "Content-Type": "text/html" 
        });
        res.write(fourzerofour_html); 
    } else{
        res.writeHead(404, {
            "Content-Type": "text/html" 
        });
        res.write(fourzerofour_html);   
    }

    res.end(); 
}); 

// activating the server to listen on port 3000
var port = 3000;
if (process.env.PORT){
    port = process.env.PORT;
} 

server.listen(port, function(){
    console.log("Server is listening on port 3000");
});
    

    