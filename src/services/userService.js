let users = require('../assets/users.json')

function authenticate(login, password) {
    console.log(login, password)

    const user = users.find(u => {
            u.username === login && u.password === password
            return users
        })

        console.log(`userService => user -> ${user}`)
        console.log(user)


    if (user) {
        console.log('User OK')

        // const { password, ...userWithoutPassword } = user;
        // return userWithoutPassword;
    } else {
        console.log('Aceess denied')
    }

    return user
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
