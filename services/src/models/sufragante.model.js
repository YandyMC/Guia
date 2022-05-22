const { Schema, model } = require('mongoose')

const bcryptjs = require('bcryptjs')

const esquemaSufragante = new Schema(
    {
        identificacion : {
            type : String
        },
        clave :{
            type : String
        },
        nombres : {
            type : String
        },
        facultad : {
            type : String
        },
        carrera : {
            type : String
        },
        nivel : {
            type : String
        },
        status : {
            type : Boolean,
            default : false
        },
        rol :[
            {
                type : Schema.Types.String,
                ref : "collecionRolSufragante"
            }
        ]
    }
)

esquemaSufragante.methods.encryptPassword = async(clave) =>{
    const salt = await bcryptjs.genSalt(10)
    const hash = bcryptjs.hash(clave, salt)
    return hash
};

esquemaSufragante.methods.matchPassword = async function(clave){
    return await bcryptjs.compare(clave, this.clave)
}

module.exports = model('coleccionSufragante', esquemaSufragante)