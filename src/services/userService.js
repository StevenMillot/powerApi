let users = require('../assets/users.json')

function authenticate({ login, password }) {
    const user = users.find(u => u.login === login && u.password === password);
    console.log('ACCESSS ?')

    if (user) {
        console.log('ACCESSS ?')

        // const { password, ...userWithoutPassword } = user;
        // return userWithoutPassword;
    }
}

// async function getAll() {
//     return users.map(u => {
//         const { password, ...userWithoutPassword } = u;
//         return userWithoutPassword;
//     });
// }

module.exports = {
    // getAll,
    authenticate
};
