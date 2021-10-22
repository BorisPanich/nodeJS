let http = require('http');
const { usersController } = require('./usersController');

process.on('unhandledRejection', function (reason, p) {
    // Will print "unhandledRejection err is not defined"
    console.log(reason, p);
});

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
        case '/users': usersController(req, res)
            break;
        case '/tasks':
            res.write('tasks')
            res.end()
            break
        default:
            res.write("Page not found")
            res.end()
    }

    // it is impossible, since there is
    // an asynchronous request above (usersController)
    // res.end()
})

// start server
server.listen(8844)