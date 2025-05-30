var database = require("../database/config")

// KPI's
function exibirPontuacao(idUsuario) {
    var instrucao = `
        select * from exibirPontuacao where idUsuario = '${idUsuario}'; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirQuantidadeDeTentativas(idUsuario) {
    var instrucao = `          
        select * from exibirTentativas where idUsuario = ${idUsuario};
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirMediaDeAcertos(idUsuario) {
    var instrucao = `    
        select * from mediaDeAcertos where idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirRank() {
    var instrucao = `
       select * from exibirRanking;
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Gráficos
function acertosPorTentativa(idUsuario) {
    var instrucao = `
        select * from exibirAcertosPorTentativa where idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tentativasPorUsuario() {
    var instrucao = `
        select * from tentativaPorUsuario;
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    exibirRank,
    exibirPontuacao,
    exibirMediaDeAcertos,
    exibirQuantidadeDeTentativas,
    tentativasPorUsuario,
    acertosPorTentativa
}