const { Schema, model } = require('mongoose')

const esquemaCandidato = new Schema(
    {
        numeroDeLista : {
            type : String
        },
        nomDePartido : {
            type : String
        },
        idCanPres : {
            type : String
        },
        nomCanPres : {
            type : String
        },
        idCanVice : {
            type : String
        },
        nomCanVice : {
            type : String
        },
        idCanSecre : {
            type : String
        },
        nomCanSecre : {
            type : String
        },
        propuesta : {
            type: String
        },
        voto:{
            type: Number,
            default: true,
            required:true
        },
    }
)

module.exports = model('colecioncandidato', esquemaCandidato)