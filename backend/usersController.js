let { getUsers, addUser } = require('./repository');

exports.usersController = (req, res) => {
    if (req.method === "POST") {
        // action
        addUser('Gleb');
        res.write(JSON.stringify({ success: true }));
        // here need res.end()
        res.end();
    } else {
        // action
        getUsers((users) => {
            res.write(users);
            // here need res.end()
            res.end();
        })
    }
}