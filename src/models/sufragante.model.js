const { Schema, model } = require('mongoose')

const esquemaSufragante = new Schema(
    {
        identificacion : {
            type : String
        },
        nombre : {
            type : String
        },
        apellido : {
            type : String
        },
        estado : {
            type : String
        }
    }
)

module.exports = model('coleccionSufragante', esquemaSufragante)