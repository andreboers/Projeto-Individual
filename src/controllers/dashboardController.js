var dashboardModel = require("../models/dashboardModel");

// KPI's
function exibirRank(req, res) {
    dashboardModel.exibirRank().then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function exibirPontuacao(req, res) {
    var id = req.body.idServer;

    dashboardModel.exibirPontuacao(id).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function exibirMediaDeAcertos(req, res) {
    var id = req.body.idServer;

    dashboardModel.exibirMediaDeAcertos(id).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function exibirQuantidadeDeTentativas(req, res) {
    var id = req.body.idServer;

    dashboardModel.exibirQuantidadeDeTentativas(id).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
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
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function acertosPorTentativa(req, res) {
    var id = req.body.idServer;

    dashboardModel.acertosPorTentativa(id).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
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
    tentativasPorUsuario,
    acertosPorTentativa
}
