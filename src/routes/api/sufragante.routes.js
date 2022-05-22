const rutas = require('express').Router()

const { createSufragante, readSufragante, updateSufragante, deleteSufragante } = require('../../controllers/sufragante.controller')

rutas.post('/api/v1/sufragante/', createSufragante)
rutas.get('/api/v1/sufragante/', readSufragante)
rutas.put('/api/v1/sufragante/:id', updateSufragante)
rutas.delete('/api/v1/sufragante/:id', deleteSufragante)


module.exports = rutas