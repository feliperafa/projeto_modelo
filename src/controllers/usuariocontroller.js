const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuarios')

exports.listAll = (req, res) => {
    Usuario.find({}, (error, usuario) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Todos os Usuarios Encotrados com Sucesso!',
            data: usuario
        }
        res.status(200).json(response)
    })
}

exports.creatOne = (req, res) => {
    const { nome, email, telefone, listas } = req.body
    const novoUsuario = new Usuario({ nome, email, telefone, listas })
    novoUsuario.save((error, usuario) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Usuario Cadastrado com Sucesso',
            data: usuario
        }
        res.status(201).json(response)
    })
}

exports.showOne = (req, res) => {
    Usuario.findById(req.params.id, (error, usuario) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Usuario encontrado com Sucesso!',
            data: usuario
        }
        res.status(200).json(response)
    })
}

exports.updateUser = (req, res) => {
    Usuario.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true },
        (error, usuario) => {
            if (error) {
                res.send(error)
            }
            const response = {
                message: 'Usuario Atualizado com Sucesso!',
                data: usuario
            }
            res.status(200).json(response)
        })
}

exports.removerUser = (req, res) => {
    Usuario.remove({ _id: req.params.id }, (error, usuario) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Usuario Deletado com Sucesso!',
            data: usuario
        }
        res.status(200).json(response)
    })
}