// JE N'ARRIVE PAS à importer mes variables
// import { hostname, port } from '/config/appConf.js'
// console.log(port)

const hostname = 'localhost'
const port = 3000


const express = require('express')
const app = express()


// JE N'ARRIVE PAS à importer le json
// const fs = require('fs')

// fs.readFile('assets/users.json', (erreur, file) => {
//   let users = JSON.parse(file)
//   console.log(users)
// })

// let file = fs.readFileSync('assets/users.json')
// let users = JSON.parse(file)
// console.log(users)


// let users = require('./assets/users.json')
// console.log(users)

// import users from 'assets/users.json'
// const users = require('assets/users.json');
// const { users } = require('assets/users.json');



// permet de rendre diponible tout les fichiers du repertoire asset
// app.use(express.static('assets'));

/**
 *
 */
app.get('/',
  (req, res, next) => {
    res.json({ message: 'Hello World !' })
    console.log('Time of \'/\' route call :', Date.now())
    next()
  }, (req, res) => {
    // cette fonction crache une erreur quand utilisé avec
    // res.send('test next 2')
    console.log('test - next')
})

// pourquoi 'test' n'est pas affiché à la place d'Hello World ?
app.get('/', (req, res) => {
  res.send('test - second app.get()')
})


app.get('/user/me', (req, res) => {
  // res.json({ users })
  console.log('Time of \'/user/me\' route call :', Date.now())
})


app.listen(port, hostname, () => {
  console.log('Serveur start on http://'+ hostname + ':' + port)
})
