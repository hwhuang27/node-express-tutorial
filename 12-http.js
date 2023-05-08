const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // req.url tells us what address/endpoint the client is requesting
        console.log('homepage accessed.');
        res.end('Welcome to my homepage');
    }
    else if (req.url === '/about') {
        console.log('about page accessed.');
        res.end('Here is our short history');
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find this page you're looking for.</p>
        <a href="/">Back home</a>
        `)
    }

})

server.listen(5000, () => {
    console.log(`Listening on port : 5000...`);
});