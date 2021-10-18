const fs = require("fs");

// retrieving "users" from file
const getUsers = () => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile("users.json", function (err, buf) {
            resolve(JSON.parse(buf.toString()));
        });
    })
    return promise;
}

const addUser = (name) => {
    users.push({ name: name })
}

exports.getUsers = getUsers;
exports.addUsers = addUser;
