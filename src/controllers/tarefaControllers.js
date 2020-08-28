const mongoose = require('mongoose')
const Tarefa = mongoose.model('Tarefas')

exports.listAll = (req, res) => {
    Tarefa.find({}, (error, tarefa) => {
        if(error) {
            res.send(error)
        }
        const response = {
            message: 'Todos os Tarefas Encotrados com Sucesso!',
            data: tarefa
        }
        res.status(200).json(response)
    })
}

   exports.creatOne = (req, res) => {
       const { titulo, descricao, id_usuario, id_categoria, atividades } = req.body
     const novoTarefa = new Tarefa({ titulo, descricao, id_usuario, id_categoria, atividades })  
     novoTarefa.save((error, tarefa) => {
         if (error) {
             res.send(error)
         }
         const response = {
             message: 'Tarefa Cadastrado com Sucesso',
             data: tarefa
         }
         res.status(201).json(response)
     })
}

exports.showOne = (req, res) => {
    Tarefa.findById(req.params.id, (error, tarefa) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Tarefa encontrado com Sucesso!',
            data: tarefa
        }
        res.status(200).json(response)
    })
}

exports.updateUser = (req, res) => {
    Tarefa.findOneAndUpdate({ _id: req.params.id }, req.body,
        {new:true},
        (error, tarefa) => {
            if (error) {
                res.send(error)
            }
            const response = {
                message: 'Tarefa Atualizado com Sucesso!', 
                data: tarefa
            }
            res.status(200).json(response)
        })
}

exports.removerUser = (req, res) => {
    Tarefa.remove({ _id: req.params.id }, (error, tarefa) => {
        if (error) {
            res.send(error)
        }
        const response = {
            message: 'Tarefa Deletado com Sucesso!',
            data: tarefa
        }
        res.status(200).json(response)
    })
}