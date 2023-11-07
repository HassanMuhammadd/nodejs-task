"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUserById = exports.getUsers = void 0;
const users = [
    {
        id: 1,
        name: "hassan",
        phone: "01022024821",
        age: 21,
        todos: [
            {
                id: 1,
                type: "task 1",
                description: "first task in my todos",
                userId: 1
            }
        ]
    },
    {
        id: 2,
        name: "hassan2",
        phone: "01022024821",
        age: 21,
        todos: [],
    },
    {
        id: 3,
        name: "hassan3",
        phone: "01022024821",
        age: 21,
        todos: [],
    },
    {
        id: 4,
        name: "hassan4",
        phone: "01022024821",
        age: 21,
        todos: [],
    },
];
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
const getUserById = (id) => {
    const user = users.find((user) => user.id === id);
    return user;
};
exports.getUserById = getUserById;
const addUser = (user) => {
    users.push(user);
};
exports.addUser = addUser;
