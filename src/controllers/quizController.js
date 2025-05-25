var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var qtdAcertos = req.body.qtdAcertoServer;
    var pontuacao = req.body.pontuacaoServer

    if (fkUsuario == undefined) {
        res.status(400).send("erro ao cadastrar!");
    }

    quizModel.cadastrar(fkUsuario, fkQuiz, qtdAcertos, pontuacao).then(function(resposta){
        res.status(200).send("Inserido no Banco!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}