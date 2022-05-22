const express = require('express');
const path = require('path')

const { engine } = require ('express-handlebars')

const cors = require('cors')
const cookieParser = require('cookie-parser')

const conn = require('./database/dbc')

class Servidor{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.path = {
            public: '/public'
        }

        this.conexionDB();
        this.middlewares()
        this.routes();
        this.views();
    }

    async conexionDB(){
        await conn.dbc()
    }

    views(){
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.engine('.hbs', engine({
            defaultLayout: 'main',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            extname: '.hbs'
        }))
        this.app.set('view engine', '.hbs')
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cookieParser())
        this.app.use(this.path.public, express.static('public'))
    }

    routes(){
        this.app.use(require('./routes/index'))
        this.app.use(require('./routes/admin.routes'))
        this.app.use(require('./routes/candidato.routes'))
        this.app.use(require('./routes/sufragante.routes'))
        this.app.use(require('./routes/api/candidato.routes'))
        this.app.use(require('./routes/api/sufragante.routes'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Servidor a su servicio en el puerto ${this.port}`)
        })
    }
}

module.exports = Servidor