let users = require('../assets/users.json')

function authenticate(login, password) {

    // user is ever find
    const user = users.find(u => {
            u.username === login && u.password === password
            return users
        })

    console.log(user)

    if (user) {
        console.log('Aceess granted')
        const userWithoutPassword = delete user.password
        return userWithoutPassword;
    } else {
        console.log('Aceess denied')
        return false
    }
}

// function getAll() {
//     return users.map(u => {
//         const { password, ...userWithoutPassword } = u;

//         return userWithoutPassword;
//     });
// }

module.exports = {
    // getAll,
    authenticate
};
