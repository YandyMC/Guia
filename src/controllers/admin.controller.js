const { ModeloAdmin } = require('../models/index')

const createAdmin = async(req, res) => {
    const { ...data } = req.body;
    const existeAdmin = await ModeloAdmin.findOne({
        identificacion : data.identificacion
    })
    if(existeAdmin){
        return res.json({msg: `El usuario ${data.identificacion} ya se encuentra registrado`})
    }
    const admin = new ModeloAdmin(data);
    const adminiCreate = await admin.save();
    res.status(200).send(adminiCreate)
}

const readAdmin = async (req, res) => {
    const data = await ModeloAdmin.find()
    res.status(200).json(data)
    console.log(data)
}

const updateAdmin = async (req, res) =>{
    const { id } = req.params;
    const { ...data } = req.body;
    const adminModificado = await ModeloAdmin.findByIdAndUpdate(id, data, { new:true })
    res.status(200).json(adminModificado)
}

const deleteAdmin = async (req, res) =>{
    const { id } = req.params;
    const adminModificado = await ModeloAdmin.findByIdAndDelete(id)
    res.status(200).json({msg: `El candidato fue eliminado satisfactoriamente`})
}


module.exports = {
    createAdmin,
    readAdmin,
    updateAdmin,
    deleteAdmin
}