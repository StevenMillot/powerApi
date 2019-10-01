// Ce module est là pour contenir le code de ton serveur HTTP.
// On doit pouvoir avec ce module démarrer un serveur HTTP avec les paramètres que l'on souhaite.

module.exports = {
  servStart: (hostname, port) => {

    const express = require('express')
    const app = express()

    console.log("in servStart")
    // console.log(app)

    // Exécute le serveur
    app.listen(hostname, port, () => {
      console.log('in app.listen')
      console.log(`Serveur start on http://${hostname}:${port}`)
    })

    return app
  }
};
