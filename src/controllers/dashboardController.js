var dashboardModel = require("../models/dashboardModel");

// KPI's
function exibirRank(req, res) {
    dashboardModel.exibirRank().then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            console.log('entrei no if da função "exibirRank"')
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
            console.log('entrei no if da função "exibirPontuacao"')
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
            console.log('entrei no if da função "exibirMediaDeAcertos"')
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
            console.log('entrei no if da função "exibirQuantidadeDeTentativas"')
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


// Gráfico de Linha
function tentativasPorUsuario(req, res) {
    dashboardModel.tentativasPorUsuario().then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            console.log('Entrei no if da função "tentativaPorUsuario"')
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
    exibirQuantidadeDeTentativas,
    tentativasPorUsuario
}
