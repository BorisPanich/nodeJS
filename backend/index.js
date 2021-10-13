let http = require('http');

let server = http.createServer((req, res) => {
    res.write('text page')
    res.end()

    console.log('same server');
})

server.listen(8844)

console.log(http);