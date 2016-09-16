var db = require('../../config/database');

var api = {}

api.adiciona = function(req, res) {

    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Successfully added: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.busca = function(req, res) {
   db.findOne({_id: req.params.studentId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualiza = function(req, res) {

    db.update({_id : req.params.studentId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Successfully updated: ' + req.body._id);
        res.status(200).end();
    });
};

api.lista = function(req, res) {
    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPorGrupo = function(req, res) {
    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });

};

api.remove = function(req, res) {

    db.remove({ _id: req.params.studentId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('Successfully removed');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listaGeneros = function(req, res) {

    res.json([
        {
            _id: 1,
            nome: 'Feminino'
        },
        {
            _id: 2,
            nome: 'Masculino',
        }
    ]);

};


module.exports = api;
