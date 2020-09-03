const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AtividadeSchema = new Schema({
    descricao: {
        type: String,
        required: 'Favor Informar o Titulo'
    },
    created_At: {
        type: Date,
        default: Date.now
    },
    dt_prevista: {
        type: Date,
        default: Date.now
    },
    dt_execucao: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Atividades', AtividadeSchema)