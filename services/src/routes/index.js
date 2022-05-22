const rutas = require('express').Router()
const path = require('path')

const axios = require('axios')

const passport = require('passport')
const { autenticacion } = require('../helpers/auth')

rutas.get('/', (req, res) =>{
    res.render('index')
})

rutas.get('/user/perfil', autenticacion, (req, res) =>{
    axios.get('http://localhost:3030/api/v1/candidato').then(resp =>{
        //console.log(resp.data)

        res.render('perfil', {
            candidatos : resp.data
        })
    })
})

rutas.get('/user/login', (req, res) =>{
    res.render('login')
})

rutas.post('/user/login', passport.authenticate('local', {
    successRedirect: '/user/perfil',
    failureRedirect: '/user/login',
    failureFlash: true
}))

rutas.get('/user/logout', (req, res) =>{
    req.logOut(),
    res.redirect('/user/login')
})

module.exports = rutas