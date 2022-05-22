const express = require('express')
const path = require('path')

const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

require('./config/passport')

const mongoose = require('mongoose')

class Servidor{
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.conexionDB()
        this.views()
        this.middlewares()
        this.routes()
    }

    async conexionDB(){
        try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log('Conexion exitosa con la base de datos')
        }
        catch(error){
            console.log(error)
            throw new Error('Error de conexion con la base de datos')
        }
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(session({
            secret: 'xd', resave: true, saveUninitialized: true,
        }))
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        this.app.use(flash())
        this.app.use((req, res, next) =>{
            res.locals.error = req.flash('error');
            res.locals.user = req.user || null;
            next()
        })
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    views(){
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'hbs');
    }

    routes(){
        this.app.use(require('./routes/index'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Servidor de microservicio a su servicio en el puerto ${this.port}`)
        })
    }
}

module.exports = Servidor