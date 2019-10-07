// Ce module est là pour contenir le code de ton serveur HTTP.
// On doit pouvoir avec ce module démarrer un serveur HTTP avec les paramètres que l'on souhaite.
const express = require('express')

module.exports = {
  servStart: (hostname, port) => {

    const app = express()

    // console.log('export app -> ', app)

    // Exécute le serveur
    app.listen(port, () => {
      console.log(`Serveur start on http://${hostname}:${port}`)
    })

    return app
  }
};
