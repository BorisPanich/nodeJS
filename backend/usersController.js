let { getUsers, addUser } = require('./repository');

const POST = 'POST'
const GET = 'GET'
const PUT = 'PUT'
const DELETE = 'DELETE'

exports.usersController = async (req, res) => {

    switch (req.method) {
        case POST: {
            // action
            let result = await addUser('Gleb');
            // addUser('Gleb');
            res.write(JSON.stringify({ success: true }));
            // here need res.end()
            res.end();
        }
        case GET: {
            // action
            let users = await getUsers();
            res.write(JSON.stringify(users));
            // here need res.end()
            res.end();
        }
        default:
    }
}
