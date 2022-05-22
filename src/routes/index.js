const rutas = require('express').Router()
const axios = require('axios')

rutas.get('/', (req, res) => {
    res.render('index')
})

rutas.get('/test', function(req, res, next){
    axios.get('http://localhost:3030/api/v1/candidato').then(res =>{
        console.log(res.data.candidato)
    })
    res.render('')
})

module.exports = rutas