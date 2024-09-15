// Il sert à définir le scenario de démarage de l'application:
// récupération de la config, récupération du module serveur, puis enfin exécution du serveur.

const servStart = require('../app')
const { hostname, port } = require('../config/appConf')



servStart(hostname, port)
