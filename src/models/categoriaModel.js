const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriaSchema = new Schema({
    descricao: {
        type: String,
        required: 'Favor Informar o Titulo'
    },
    created_At: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Categorias', CategoriaSchema)