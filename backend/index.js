let http = require('http');

let server = http.createServer((req, res) => {
    //    console.log('text from console');

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    switch (req.url) {
        case "/users":
            res.write(`[{"id": 1, "banned": true, name: "Boris"}, {"id": 2, name: "Olya"}]`)
            break
        case "/task":
            res.write(`tasks`)
            break
        default:
            res.write("Page not found")
    }

    res.end()

    console.log('same request');
})

server.listen(8844)

console.log(http);