var database = require("../database/config")

function exibirRank() {

    var instrucao = `
        select u.nome as ranking,
        sum(p.pontuacao) as pontuacaoTotal
        from pontuacao p 
        join usuario u on p.fkUsuario = u.id
        join quiz q on q.idQuiz = p.fkQuiz
        group by u.nome
        order by sum(p.pontuacao) desc;
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirPontuacao(nome) {

    var instrucao = `
        select sum(p.pontuacao) as pontuacao
        from pontuacao p 
        join usuario u on p.fkUsuario = u.id
        join quiz q on q.idQuiz = p.fkQuiz
        group by u.nome
        having u.nome = '${nome}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirMediaDeAcertos(nome) {
    var instrucao = `
        select round(avg(p.qtdAcertos), 1) as mediaAcertos
        from pontuacao p
        join usuario u 
        on p.fkUsuario = u.id
        join quiz q 
        on p.fkQuiz = q.idQuiz
        group by u.nome, q.nomeQuiz
        having u.nome = '${nome}'
        order by u.nome, avg(p.qtdAcertos) desc;

    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirQuantidadeDeTentativas(nome) {
    var instrucao = `
        select count(*) as tentativas
        from pontuacao p 
        join usuario u 
        on p.fkUsuario = u.id
        join quiz q 
        on q.idQuiz = p.fkQuiz
        group by u.nome
        having u.nome = '${nome}';
    `

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}


module.exports = {
    exibirRank,
    exibirPontuacao,
    exibirMediaDeAcertos,
    exibirQuantidadeDeTentativas
}