* import

const fs = require('fs')

// appel async
fs.readFile('assets/users.json', (erreur, file) => {
  let users = JSON.parse(file)
  console.log(users)
})

// appel sync
let file = fs.readFileSync('assets/users.json')
let users = JSON.parse(file)
console.log(users)


// require met en cache le fichier appelé
let users = require('./assets/users.json')
console.log(users)



* app.use
// permet de rendre diponible tout les fichiers du repertoire asset
app.use(express.static('assets'));




* pour les import
babel core + babel node
et appler dans le package.json => babel-node



// DIR ENTRY
// Fonctionnement globale de mon application
