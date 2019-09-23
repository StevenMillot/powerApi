const express = require('express')
const app = express()

const getRoute = require('../app')
const { hostname, port } = require('../config/appConf')


getRoute.createRoute()



app.listen(port, hostname, () => {
  console.log(`Serveur start on http://${hostname}:${port}`)
})
