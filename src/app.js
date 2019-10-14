// Ce module est là pour contenir le code de ton serveur HTTP.
// On doit pouvoir avec ce module démarrer un serveur HTTP avec les paramètres que l'on souhaite.
const express = require('express')

const basicAuth = require('./helpers/basicAuth')

const servStart = (hostname, port) => {
  // Création de l'application
  const app = express()

  // Configuration de l'application


  // let users = require('./assets/users.json')


  /**
   * Configure '/'
   * pour envoyer un message json
   * et log le timestamp la requete
   */
  app.get('/', (req, res) => {
    res.json({ message: 'Hello World !' })
    console.log('Time of \'/\' route call :', Date.now())
  })

  /**
   * Configure '/user/me'
   * pour authentifier un utilisateur
   */
  app.get('/user/me', (req, res, next) => {
    // Vérifie le type d'authentification de la request
    basicAuth(req, res, next)

    // res.json({ users })
  })

  // console.log('export app -> ', app)

  // Exécute le serveur
  app.listen(port, () => {
    console.log(`Serveur start on http://${hostname}:${port}`)
  })

  return app
}

module.exports = servStart;
