const rutas = require('express').Router()

const { createCandidato, readCandidato, updateCandidato, deleteCandidato } = require('../../controllers/candidato.controller')

rutas.post('/api/v1/candidato/', createCandidato)
rutas.get('/api/v1/candidato/', readCandidato)
rutas.put('/api/v1/candidato/:id', updateCandidato)
rutas.delete('/api/v1/candidato/:id', deleteCandidato)


module.exports = rutas