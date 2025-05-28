var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/exibirRank", function (req, res) {
    dashboardController.exibirRank(req, res);
});

router.post("/exibirPontuacao", function (req, res) {
    dashboardController.exibirPontuacao(req, res);
});

router.post("/exibirMediaDeAcertos", function (req, res) {
    dashboardController.exibirMediaDeAcertos(req, res);
});

router.post("/exibirQuantidadeDeTentativas", function (req, res) {
    dashboardController.exibirQuantidadeDeTentativas(req, res);
});

router.get("/tentativasPorUsuario", function (req, res) {
    dashboardController.tentativasPorUsuario(req, res);
});

router.post("/acertosPorTentativa", function (req, res) {
    dashboardController.acertosPorTentativa(req, res);
});

module.exports = router;