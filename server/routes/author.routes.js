const AuthorController = require('../controllers/author.controllers');

module.exports = function(app){
    app.post('/api/author/',AuthorController.createAuthor);
    app.get('/api/authors/',AuthorController.getAll);
    app.get('/api/author/:id',AuthorController.getAuthor);
    app.put('/api/author/:id',AuthorController.updateAuthor);
    app.delete('/api/author/:id',AuthorController.deleteAuthor);
}