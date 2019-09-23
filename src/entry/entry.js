const { config } = require('./config')
const { createApp } = require('./app')

const app = createApp(config)

app.listen(config.port, config.hostname, () => {
  console.log(`Serveur start on http://${config.hostname}:${config.port}`)
})

// changer le package json pour lancer le entry.js
