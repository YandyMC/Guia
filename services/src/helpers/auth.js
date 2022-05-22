const helpers = {}

helpers.autenticacion = (req, res, next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    else{
        req.flash('error_msg', 'Usuario no autentificado')
        res.redirect('/user/login')
    }
}

module.exports = helpers