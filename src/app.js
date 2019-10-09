// Ce module est là pour contenir le code de ton serveur HTTP.
// On doit pouvoir avec ce module démarrer un serveur HTTP avec les paramètres que l'on souhaite.
const express = require('express')

module.exports = {
  servStart: (hostname, port) => {

    // Création de l'application
    const app = express()
    // Configuration de l'application
    let users = require('./assets/users.json')

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

    // console.log('export app -> ', app)

    // Exécute le serveur
    app.listen(port, () => {
      console.log(`Serveur start on http://${hostname}:${port}`)
    })

    return app
  }
};
