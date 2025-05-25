var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/exibirRank", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
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

// router.post("/graficoLinha", function (req, res) {
//     dashboardController.graficoLinha(req, res);
// });

module.exports = router;