let { getUsers, addUser } = require('./repository');

exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        // action
        addUser('Gleb');
        res.write(JSON.stringify({ success: true }));
        // here need res.end()
        res.end();
    } else {
        // action
        let users = await getUsers();
        res.write(JSON.stringify(users));
        // here need res.end()
        res.end();
    }
}
