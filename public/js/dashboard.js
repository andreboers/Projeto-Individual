
// Função para Exibir o Rank
function exibirRank() {
    fetch("/dashboard/exibirRank", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO exibirMedia()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`)
                
 

                for(var i = 0; i < resposta.length; i++){
                    rank = resposta[i].ranking
                    pontuacaoTotal = resposta[i].pontuacaoTotal

                    if(i == 0){
                        user_rank.innerHTML += `<p style="color: #FFD700; padding: 10px; margin: 0; font-size: 30px;"><i class="fa-solid fa-trophy"></i> ${rank} - ${pontuacaoTotal}</p> <br>`
                    }
                    else if(i == 1){
                        user_rank.innerHTML += `<p style="color: silver; padding: 10px; margin: 0; font-size: 30px;">2º ${rank} - ${pontuacaoTotal} </p><br>`
                    }
                    else if(i == 2){
                        user_rank.innerHTML += `<p style="color: #CD7F32; padding: 5px; margin: 0; font-size: 30px;">3º ${rank} - ${pontuacaoTotal}</p> <br>`
                    } else if (i < 10) {
                        user_rank.innerHTML += `<p style="color: white; padding: 5px; margin: 0; font-size: 30px;">${i + 1}º ${rank} - ${pontuacaoTotal} <br></p>`
                    }




                }

                


            })

        } else {

            console.log("Houve um erro ao tentar exibir a média de acertos!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


// Função de Exibir Pontuacao
function exibirPontuacao() {

    var nome = sessionStorage.getItem("NOME_USUARIO");

    fetch("/dashboard/exibirPontuacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO exibirMedia()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`)
                    pontuacao = resposta[0].pontuacao
                    user_pontuacao.innerHTML = pontuacao
                })

            } else {

                console.log("Houve um erro ao tentar exibir a média de acertos!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}


// Função para Exibir a Média de Acertos
function exibirMediaDeAcertos() {

    var nome = sessionStorage.getItem("NOME_USUARIO");

    fetch("/dashboard/exibirMediaDeAcertos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO exibirMedia()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`)
                    media = resposta[0].mediaAcertos
                    user_mediaAcertos.innerHTML = media
                })

            } else {

                console.log("Houve um erro ao tentar exibir a Média de Acertos!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}


// Função para Exibir a Quantidade de Tentativas
function exibirQuantidadeDeTentativas() {

    var nome = sessionStorage.getItem("NOME_USUARIO");

    fetch("/dashboard/exibirQuantidadeDeTentativas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO exibirQuantidadeDeTentativas()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`)
                    qtdTentativas = resposta[0].tentativas
                    user_qtdTentativas.innerHTML = qtdTentativas
                })

            } else {

                console.log("Houve um erro ao tentar exibir a Quantidade de Tentativas!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}


