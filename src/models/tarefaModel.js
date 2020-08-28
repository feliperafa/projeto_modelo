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
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios'
    },
    id_categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorias'
    },
    atividades:[{
        id_atividade: {
            Type: mongoose.Schema.Types.ObjectId
        }
    }]
})
module.exports = mongoose.model('Tarefas',TarefaSchema)