const http = require('http');
const path = require('path');
const fs = require('fs');

const patterns = {
    "rg":0,
    "icicle":1,
    "meteor":2,
    "fade":3,
};

let selectedPattern = "fade";

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(content);
        });
        
    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(content);
        });
        
    }


    if(req.url === '/api'){
        
        
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(patterns[selectedPattern]));
        
    }
});


const PORT = process.env.PORT||5000;
server.listen(PORT, ()=>`Server running on port: ${PORT}`);