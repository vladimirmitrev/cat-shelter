const http = require('http');
const homeTemplate = require('./views/home.html');
const addCatTemplate = require('./views/addCat.html');
const addBreedTemplate = require('./views/addBreed.html');
const siteCss = require('./views/site.css');

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(homeTemplate);
        res.end();
    } else if (req.url === '/styles/site.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        res.write(siteCss)
        res.end();
    } else if (req.url === '/cats/add-cat') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(addCatTemplate)
        res.end();
    } else if (req.url === '/cats/add-breed') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(addBreedTemplate)
        res.end(); 
    } else {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('<h1>404</h1>')
        res.end();
    }

});

server.listen(5000);
console.log('Server is running on port 5000...');