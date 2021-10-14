let users = [
    { "id": 1, "banned": true, "name": "Boris" },
    { "id": 2, "name": "Olya" }
]

const getUsers = () => {
    return users;
}

const addUser = (name) => {
    users.push({ name: name })
}

exports.getUsers = getUsers;
exports.addUsers = addUser;
