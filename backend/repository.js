const fs = require("fs");

// const getUsers = () => {
//     return users;
// }


// retrieving "users" from file
const getUsers = (callback) => {
    fs.readFile("users.json", function (err, buf) {
        callback(buf.toString());
    });
}

const addUser = (name) => {
    users.push({ name: name })
}

exports.getUsers = getUsers;
exports.addUsers = addUser;
