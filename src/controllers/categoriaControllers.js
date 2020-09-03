const mongoose = require('mongoose')
const Categoria = mongoose.model('Categorias')

exports.listAll = (req, res) => {
    Categoria.find({}, (error, categoria) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Todos os Categorias Encotrados com Sucesso!',
            data: categoria
        }
        res.status(200).json(response)
    })
}

exports.creatOne = (req, res) => {
    const { descricao } = req.body
    const novoCategoria = new Categoria({ descricao })
    novoCategoria.save((error, categoria) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Categoria Cadastrado com Sucesso',
            data: categoria
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Categoria.findById(req.params.id, (error, categoria) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Categoria encontrado com Sucesso!',
            data: categoria
        }
        res.status(200).json(response)
    })
}

exports.updateUser = (req, res) => {
    Categoria.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true },
        (error, categoria) => {
            if (error) {
                res.send(error)
            }
            const response = {
                message: 'Categoria Atualizado com Sucesso!',
                data: categoria
            }
            res.status(200).json(response)
        })
}

exports.removerUser = (req, res) => {
    Categoria.remove({ _id: req.params.id }, (error, categoria) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Categoria Deletado com Sucesso!',
            data: categoria
        }
        res.status(200).json(response)
    })
}