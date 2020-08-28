const mongoose = require('mongoose')
const Atividade = mongoose.model('Atividades')

exports.listAll = (req, res) => {
    Atividade.find({}, (error, atividade) => {
        if(error) {
            res.send(error)
        }
        const response = {
            message: 'Todos os Atividades Encotrados com Sucesso!',
            data: atividade
        }
        res.status(200).json(response)
    })
}

   exports.creatOne = (req, res) => {
       const { descricao } = req.body
     const novoCategoria = new Atividade({ descricao })  
     novoCategoria.save((error, atividade) => {
         if (error) {
             res.send(error)
         }
         const response = {
             message: 'Atividade Cadastrado com Sucesso',
             data: atividade
         }
         res.status(201).json(response)
     })
}

exports.showOne = (req, res) => {
    Atividade.findById(req.params.id, (error, atividade) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Atividade encontrado com Sucesso!',
            data: atividade
        }
        res.status(200).json(response)
    })
}

exports.updateUser = (req, res) => {
    Atividade.findOneAndUpdate({ _id: req.params.id }, req.body,
        {new:true},
        (error, atividade) => {
            if (error) {
                res.send(error)
            }
            const response = {
                message: 'Atividade Atualizado com Sucesso!', 
                data: atividade
            }
            res.status(200).json(response)
        })
}

exports.removerUser = (req, res) => {
    Atividade.remove({ _id: req.params.id }, (error, atividade) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Atividade Deletado com Sucesso!',
            data: atividade
        }
        res.status(200).json(response)
    })
}