const { ModeloSufragante } = require('../models/index')

const createSufragante = async(req, res) => {
    const { ...data } = req.body;
    const existeSufragante = await ModeloSufragante.findOne({
        identificacion : data.identificacion
    })
    if(existeSufragante){
        return res.json({msg: `El votante ${data.identificacion} ya se encuentra registrado`})
    }
    const sufragante = new ModeloSufragante(data);
    const sufraganteCreate = await sufragante.save();
    res.status(200).send(sufraganteCreate)
}

const readSufragante = async (req, res) => {
    const data = await ModeloSufragante.find()
    res.status(200).json(data)
    console.log(data)
}

const updateSufragante = async (req, res) =>{
    const { id } = req.params;
    const { ...data } = req.body;
    const sufraganteUpdate = await ModeloSufragante.findByIdAndUpdate(id, data, { new:true })
    res.status(200).json(sufraganteUpdate)
}

const deleteSufragante = async (req, res) =>{
    const { id } = req.params;
    const sufraganteDelete = await ModeloSufragante.findByIdAndDelete(id)
    res.status(200).json({msg: `El sufragante fue eliminado satisfactoriamente`})
}


module.exports = {
    createSufragante,
    readSufragante,
    updateSufragante,
    deleteSufragante
}