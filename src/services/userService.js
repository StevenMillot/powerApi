let users = require('../assets/users.json')

function authenticate(login, password) {
    console.log(login, password)

    const user = users.find(u => {
        console.log(u.username, u.password) //steven p4ssw0rd
        u.username === login && u.password === password
    });

    console.log(`userService => user -> ${user}`)//user in userService -> undefined


    if (user) {
        console.log('User OK')

        // const { password, ...userWithoutPassword } = user;
        // return userWithoutPassword;
    } else {
        console.log('Aceess denied')
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
