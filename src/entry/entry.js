// Il sert à définir le scenario de démarage de l'application:
// récupération de la config, récupération du module serveur, puis enfin exécution du serveur.

const servCreator = require('../app')
const { hostname, port } = require('../config/appConf')



servCreator.servStart(hostname, port)
