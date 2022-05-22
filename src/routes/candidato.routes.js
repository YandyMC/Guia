const rutas = require('express').Router()
const axios = require('axios')

rutas.get('/view/admin_crud_candidato', function(req, res, next){
    axios.get('http://localhost:3030/api/v1/candidato').then(resp =>{
        //console.log(resp.data)

        res.render('view_admin/view_crud_candidato', {
            candidatos : resp.data
        })
    })
})

rutas.get('/view/admin_form_candidato', (req, res, next) =>{
    res.render('view_admin/view_form_candidato', {})
})

rutas.get('/view/admin_update_candidato/:id', (req, res, next) =>{
    axios.put(`http://localhost:3030/api/v1/candidato/${req.params.id}`).then(resp =>{
        res.render('view_admin/view_form_candidato', {
            candidato : resp.data
        })
    })
    //res.render('view_admin/view_form_candidato', {})
})

rutas.get('/view/admin_delete_candidato/:id', function(req, res, next){
    axios.delete(`http://localhost:3030/api/v1/candidato/${req.params.id}`).then(resp =>{
        res.redirect('/view/admin_crud_candidato');
    })
})

rutas.post('/candidato/operar', (req, res, next) =>{
    console.log(req.body)
    if(req.body._id === ""){
        axios.post('http://localhost:3030/api/v1/candidato/', {
            numeroDeLista : req.body.numeroDeLista,
            nomDePartido : req.body.nomDePartido,
            logoDePartido : req.body.logoDePartido,
            idCanPres : req.body.idCanPres,
            nomCanPres : req.body.nomCanPres,
            idCanVice : req.body.idCanVice,
            nomCanVice : req.body.nomCanSecre,
            idCanSecre : req.body.idCanSecre,
            nomCanSecre : req.body.nomCanSecre,
            propuesta : req.body.propuesta
        }).then(resp =>{
            res.redirect('/view/admin_crud_candidato')
        })
    }
    else{
        axios.put(`http://localhost:3030/api/v1/candidato/${req.body._id}`, {
            numeroDeLista : req.body.numeroDeLista,
            nomDePartido : req.body.nomDePartido,
            logoDePartido : req.body.logoDePartido,
            idCanPres : req.body.idCanPres,
            nomCanPres : req.body.nomCanPres,
            idCanVice : req.body.idCanVice,
            nomCanVice : req.body.nomCanSecre,
            idCanSecre : req.body.idCanSecre,
            nomCanSecre : req.body.nomCanSecre,
            propuesta : req.body.propuesta
        }).then(resp =>{
            res.redirect('/view/admin_crud_candidato')
        })
    }
})

module.exports = rutas