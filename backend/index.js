let http = require('http');
const { getUsers, addUsers } = require('./repository');


// Set CORS headers
let cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    }
    return false;
}

let server = http.createServer((req, res) => {

    if (cors(req, res)) return;

    switch (req.url) {
        case "/users":
            if (req.method === "POST") {
                addUsers('Gleb');
                res.write(JSON.stringify({ success: true }));
            } else {
                res.write(JSON.stringify(getUsers()));
            }
            break;
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