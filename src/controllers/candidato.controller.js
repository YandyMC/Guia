const { ModeloCandidato } = require('../models/index')

const createCandidato = async(req, res) => {
    const { ...data } = req.body;
    const exiteCandidato = await ModeloCandidato.findOne({
        numeroDeLista : data.numeroDeLista
    })
    if(exiteCandidato){
        return res.json({msg: `La lista ${data.numeroDeLista} ya se encuentra registrado`})
    }
    const candidato = new ModeloCandidato(data);
    const candidatoCreate = await candidato.save();
    res.status(200).send(candidatoCreate)
}

const readCandidato = async (req, res) => {
    const data = await ModeloCandidato.find()
    res.status(200).json(data)
    console.log(data)
}

const updateCandidato = async (req, res) =>{
    const { id } = req.params;
    const { ...data } = req.body;
    const candidatoUpdate = await ModeloCandidato.findByIdAndUpdate(id, data, { new:true })
    res.status(200).json(candidatoUpdate)
}

const deleteCandidato = async (req, res) =>{
    const { id } = req.params;
    const candidatoDelete = await ModeloCandidato.findByIdAndDelete(id)
    res.status(200).json({msg: `El candidato fue eliminado satisfactoriamente`})
}


module.exports = {
    createCandidato,
    readCandidato,
    updateCandidato,
    deleteCandidato
}