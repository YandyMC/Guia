const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const SufraganteModel = require('../models/sufragante.model')

passport.use(new localStrategy({
    usernameField : 'username',
    passwordField: 'password'
}, async (username, password, done) =>{
    const sufragante = await SufraganteModel.findOne({identificacion : username})
    if(sufragante && sufragante.status == true){
        return done(null, false, { message : "Usted ya voto xd"})
    }
    if(!sufragante){
        return done(null, false, { message : "Usuario no encontrado" })
    }else{
        const match = await sufragante.matchPassword(password)
        if(match){
            return done(null, sufragante)
        }else{
            return done(null, false, { message : "Contraseña incorrecta" })
        }
    }
}));

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    SufraganteModel.findById(id, (err, user) =>{
        done(err, user)
    })
})