const rutas = require('express').Router()

const { createAdmin, readAdmin, updateAdmin, deleteAdmin, editAdmin} = require('../controllers/admin.controller')

rutas.get('/view/admin_index', (req, res) =>{
    res.render('view_admin/admin_index')
})

rutas.get('/view/admin_elecciones', (req, res) =>{
    res.render('view_admin/view_elecciones')
})

module.exports = rutas