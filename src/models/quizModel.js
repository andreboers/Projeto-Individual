var database = require("../database/config")

function cadastrar(fkUsuario, fkQuiz, qtdAcertos, pontuacao) {
    var instrucao = `
        INSERT INTO pontuacao (fkUsuario, fkQuiz, qtdAcertos, pontuacao) VALUES ('${fkUsuario}', '${fkQuiz}', '${qtdAcertos}', '${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};