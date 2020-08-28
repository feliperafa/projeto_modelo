module.exports = function (app) {
    const categorias = require('../controllers/categoriaControllers')
    const usuarios = require('../controllers/usuariocontroller')
    const tarefas = require('../controllers/tarefaControllers')

    //================================Categorias================================

    app.route('/categorias')
    .get(categorias.listAll)
    .post(categorias.creatOne)

    app.route('/categorias/:id')
    .get(categorias.showOne)
    .put(categorias.updateUser)
    .delete(categorias.removerUser)

    //================================Tarefas================================
    app.route('/tarefas')
    .get(tarefas.listAll)
    .post(tarefas.creatOne)

    app.route('/tarefas/:id')
    .get(tarefas.showOne)
    .put(tarefas.updateUser)
    .delete(tarefas.removerUser)
    
//================================Usuarios================================
    app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.creatOne)

    app.route('/usuarios/:id')
    .get(usuarios.showOne)
    .put(usuarios.updateUser)
    .delete(usuarios.removerUser)

}
