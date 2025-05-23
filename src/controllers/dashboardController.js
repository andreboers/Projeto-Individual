var dashboardModel = require("../models/dashboardModel");

function exibirRank(req, res) {
    dashboardModel.exibirRank().then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            // console.log('entrei no if')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function exibirPontuacao(req, res) {
    var nome = req.body.nomeServer;

    dashboardModel.exibirPontuacao(nome).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            // console.log('entrei no if da media')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function exibirMediaDeAcertos(req, res) {
    var nome = req.body.nomeServer;

    dashboardModel.exibirMediaDeAcertos(nome).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            // console.log('entrei no if da media')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function exibirQuantidadeDeTentativas(req, res) {
    var nome = req.body.nomeServer;

    dashboardModel.exibirQuantidadeDeTentativas(nome).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            // console.log('entrei no if da media')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    exibirRank,
    exibirPontuacao,
    exibirMediaDeAcertos,
    exibirQuantidadeDeTentativas
}
