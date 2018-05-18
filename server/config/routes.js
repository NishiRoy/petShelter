var name=require('../controllers/restful.js');

module.exports=function(app){

    app.get('/pets',name.index);

    app.get('/pets/:id',name.getPet);

    app.post('/edit/:id',name.editPets);

    app.post('/create',name.createnew);

    app.get('/destroy/:id',name.destroy);

    app.post('/like/:id',name.likes);
}