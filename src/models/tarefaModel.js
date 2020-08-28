const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TarefaSchema = new Schema({
    titulo: {
        type: String,
        required: 'Favor Informar o Titulo'
    },
    descricao: {
        type: String,
        required: 'Favor Informar o a descrição'
    },
    created_At: {
        type: Date,
        default: Date.now
    },
    usuarios: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios'
    },
    categorias: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorias',
        require: false
    }
})
module.exports = mongoose.model('Tarefas',TarefaSchema)