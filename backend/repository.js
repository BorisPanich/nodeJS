const fs = require("fs");
const { readJsonFromFile, writeJsonFromFile } = require("./fs-utils");

// retrieving "users" from file
const getUsers = () => {
    return readJsonFromFile("db")
}

const addUser = async (name) => {
    let users = await getUsers();
    users.push({ id: users.length, name: name });
    return writeJsonFromFile("db", users)
}

exports.getUsers = getUsers;
exports.addUsers = addUser;
