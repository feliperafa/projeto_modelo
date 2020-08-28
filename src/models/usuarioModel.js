const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: 'Favor Informar o nome do Usuário'
    },
    email: {
        type: String,
        required: 'Favor Informar o E-mail'
    },
    telefone: {
        type: String,
        required: 'Favor Informar o Telefone do Usuário'
    },
    created_At: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Usuarios', UsuarioSchema)