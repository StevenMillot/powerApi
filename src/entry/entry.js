// Il sert à définir le scenario de démarage de l'application:
// récupération de la config, récupération du module serveur, puis enfin exécution du serveur.

const servCreator = require('../app')
const { hostname, port } = require('../config/appConf')

const app = servCreator.servStart(hostname, port)

let users = require('../assets/users.json')

/**
 * Configure la route '/'
 * pour envoyer le message json
 * log la date d'appel
 */
app.get('/',
  (req, res) => {
    res.json({ message: 'Hello World !' })
    console.log('Time of \'/\' route call :', Date.now())
  })

/**
 * Configure la route '/user/me'
 * log la date d'appel
 */
app.get('/user/me', (req, res) => {
  res.json({ users })
  console.log('Time of \'/user/me\' route call :', Date.now())
})

// servCreator.servStart(hostname, port)
