// Il sert à définir le scenario de démarage de l'application:
// récupération de la config, récupération du module serveur, puis enfin exécution du serveur.

const servCreator = require('../app')
const { hostname, port } = require('../config/appConf')


console.log('entry start')
console.log(servCreator.servStart)

servCreator.servStart(hostname, port)

console.log('entry end')

// const serv = servCreator.servStart()
// let users = require('../assets/users.json')

// /**
//  * Configure la route '/'
//  * pour envoyer le message json
//  * log la date d'appel
//  */
// serv.get('/',
//   (req, res) => {
//     res.json({ message: 'Hello World !' })
//     console.log('Time of \'/\' route call :', Date.now())
//   })

// /**
//  * Configure la route '/user/me'
//  * log la date d'appel
//  */
// serv.get('/user/me', (req, res) => {
//   res.json({ users })
//   console.log('Time of \'/user/me\' route call :', Date.now())
// })
