const mongoose = require('mongoose')

module.exports.dbc = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexion exitosa con la base de datos')
    }
    catch(error){
        console.log(error)
        throw new Error('Error de conexion con la base de datos')
    }
}