const express = require('express')
const app = express()

module.exports = {
  createRoute: () => {

    let users = require('./assets/users.json')

    /**
     * Déclare ma route '/'
     * envoie le message json
     * log la date d'appel
     */
    app.get('/',
      (req, res) => {
        res.json({ message: 'Hello World !' })
        console.log('Time of \'/\' route call :', Date.now())
      })

    /**
     * Déclare ma route '/user/me'
     * log la date d'appel
     */
    app.get('/user/me', (req, res) => {
      res.json({ users })
      console.log('Time of \'/user/me\' route call :', Date.now())
    })
  }
};
