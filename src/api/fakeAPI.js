const Users = [
    {
        username: "abc",
        password: "123",
    },
    {
        username: "def",
        password: "456",
    },
    {
        username: "ghi",
        password: "789",
    },
];

const findUserByUsername = (username) => {
    return Users.find((user) => user.username === username);
};
const fakeAPI = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundUser = findUserByUsername(username);
            if (foundUser.password === password) {
                resolve({
                    success: true,
                    statusCode: 400,
                });
            }
            reject({
                success: false,
                statusCode: 404,
            });
            console.log(username, password);
        }, 1000);
    });
};

export default fakeAPI;