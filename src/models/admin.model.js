const { Schema, model } = require('mongoose')

const esquemaAdmin = new Schema(
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
        rol : {
            type : String
        }
    }
)

module.exports = model('coleccionAdmin', esquemaAdmin)