// Validação de Usuários
function validarUsuario() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        textoPainel.innerHTML = `Painel de ${nome}<br>
            ${email}`;
    }
}

// KPI´s
// Função para Exibir o Rank
function exibirRank() {
    fetch("/dashboard/exibirRank", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO exibirMedia()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`\n == Função exibirRank() \nDados recebidos: ${JSON.stringify(resposta)}`)

                for (var i = 0; i < resposta.length; i++) {
                    rank = resposta[i].ranking
                    pontuacaoTotal = resposta[i].pontuacaoTotal

                    if (i == 0) {
                        user_rank.innerHTML += `<p style="color: #FFD700; padding: 10px; margin: 0; font-size: 30px;"><i class="fa-solid fa-trophy"></i> ${rank} - ${pontuacaoTotal}</p> <br>`
                    }
                    else if (i == 1) {
                        user_rank.innerHTML += `<p style="color: silver; padding: 10px; margin: 0; font-size: 30px;">2º ${rank} - ${pontuacaoTotal} </p><br>`
                    }
                    else if (i == 2) {
                        user_rank.innerHTML += `<p style="color: #CD7F32; padding: 5px; margin: 0; font-size: 30px;">3º ${rank} - ${pontuacaoTotal}</p> <br>`
                    } else if (i < 10) {
                        user_rank.innerHTML += `<p style="color: white; padding: 5px; margin: 0; font-size: 30px;">${i + 1}º ${rank} - ${pontuacaoTotal} <br></p>`
                    }
                }

            })

        } else {

            console.log("Houve um erro ao tentar exibir o Ranking de Jogadores!");

            resposta.text().then(texto => {
                console.error(texto);
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
            // console.log("ESTOU NO THEN DO exibirMedia()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`\n == Função exibirPontuacao() \nDados recebidos: ${JSON.stringify(resposta)}`)
                    pontuacao = resposta[0].pontuacao
                    user_pontuacao.innerHTML = pontuacao
                })

            } else {

                console.log("Houve um erro ao tentar exibir a Pontuação!");

                resposta.text().then(texto => {
                    console.error(texto);

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
            // console.log("ESTOU NO THEN DO exibirMedia()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`\n == Função exibirMediaDeAcertos() \nDados recebidos: ${JSON.stringify(resposta)}`)
                    media = resposta[0].mediaAcertos
                    user_mediaAcertos.innerHTML = media
                })

            } else {

                console.log("Houve um erro ao tentar exibir a Média de Acertos!");

                resposta.text().then(texto => {
                    console.error(texto);

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
            // console.log("ESTOU NO THEN DO exibirQuantidadeDeTentativas()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`\n == Função exibirQuantidadeDeTentativas() \nDados recebidos: ${JSON.stringify(resposta)}`)
                    qtdTentativas = resposta[0].tentativas
                    user_qtdTentativas.innerHTML = qtdTentativas
                })

            } else {

                console.log("Houve um erro ao tentar exibir a Quantidade de Tentativas!");

                resposta.text().then(texto => {
                    console.error(texto);

                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}


// Gráficos
// Função para trazer dados de Nome e Quantidade de Tentativas de cada Usuário
function tentativasPorUsuario() {
    fetch("/dashboard/tentativasPorUsuario", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        // console.log("ESTOU NO THEN DO tentativasPorUsuario()!")

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log(`\n== Função tentativasPorUsuario() \nDados recebidos: ${JSON.stringify(resposta)}`)

                for (var i = 0; i < resposta.length; i++) {

                }

            })

        } else {

            console.log("Houve um erro ao tentar exibir as Tentativas por Usuário!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

// Função para obter os Nomes e Tentativas dos Usuários
function obterDadosTentativasPorUsuario() {
    fetch(`/dashboard/tentativasPorUsuario`, { cache: 'no-store' }).then(function (response) {
        console.log(response)
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`\n\n\n============================== \nDados obtidos para o gráfico de Tentativas por Usuário: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGraficoTentativaPorUsuario(resposta);

            });
        } else {
            console.error('\nNenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`\nErro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

function plotarGraficoTentativaPorUsuario(resposta) {

    console.log('\nIniciando plotagem do gráfico de Tentativas por Jogador');

    let labels = [];
    var valores = [];

    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.Nome);
        valores.push(registro.Tentativas);
    }
    console.log('\nO gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('\nDados:')
    console.log(valores)

    const ctx = document.getElementById('graficoTentativasUsuarios');

    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#333';

    new Chart(ctx, {

        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Tentativas',
                data: valores,
                borderWidth: 5,
                backgroundColor: [`#2E7D32`, `#4BC0C033`],
                borderColor: [`#4BC0C033`, `#2E7D32`],
                barPercentage: 0.7,
                categoryPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Tentativas dos Jogadores',
                    font: {
                        family: 'VT323',
                        size: 30,
                        weight: 'normal',
                    }
                },
                legend: {
                    display: false,
                },
                tooltip: {
                    bodyFont: {
                        family: 'VT323',
                        size: 20
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'VT323',
                            size: 20
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'VT323',
                            size: 20
                        }
                    }
                }
            }
        }
    });
}


// Gráfico Acertos por Tentativas
function acertosPorTentativa() {

    var nome = sessionStorage.getItem("NOME_USUARIO");

    fetch("/dashboard/acertosPorTentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome
        }),
    })
        .then(function (resposta) {
            // console.log("ESTOU NO THEN DO acertosPorTentativa()!")

            if (resposta.ok) {

                resposta.json().then(function (resposta) {
                    console.log(`\n == Função acertosPorTentativa() \nDados recebidos: ${JSON.stringify(resposta)}`)

                    dtTentativa = resposta[0].dataTentativa;
                    acertos = resposta[0].Acertos;
                })

            } else {

                console.log("Houve um erro ao tentar exibir os Acertos por Tentativa!");

                resposta.text().then(texto => {
                    console.error(texto);

                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;
}

// Obter Dados para o Gráfico de Acertos por Tentativa
function obterDadosAcertosPorTentativa() {

    var nome = sessionStorage.getItem("NOME_USUARIO");

    fetch(`/dashboard/acertosPorTentativa`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeServer: nome
        })
    })
        .then(function (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`\n\n\n============================== \nDados obtidos para o gráfico de Acertos por Tentativa do Usuário: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    plotarAcertosPorTentativa(resposta);
                });
            } else {
                console.error('\nNenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`\nErro na obtenção dos dados para o gráfico de Acertos por Tentativa: ${error.message}`);
        });
}


function plotarAcertosPorTentativa(resposta) {

    console.log('\n\n\nIniciando plotagem do gráfico Acertos por Tentativa do Usuário');

    let labels = [];
    var valores = [];

    console.log(resposta)

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.dataTentativa);
        valores.push(registro.Acertos);
    }
    console.log('\nO gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('\nDados:')
    console.log(valores)

    const ctx = document.getElementById('graficoAcertosPorTentativa');

    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#333';

    new Chart(ctx, {

        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Acertos',
                data: valores,
                borderWidth: 4,
                borderColor: '#2E7D32',
                borderDash: [10, 5],
                tension: 0.4,
                pointRadius: 5,
                pointStyle: 'rectRounded',
                pointBackgroundColor: '#000',
                pointBorderColor: '#4CAF50',
                fill: true,
                backgroundColor: '#4BC0C033',

                barPercentage: 0.7,
                categoryPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Acertos por Tentativa',
                    font: {
                        family: 'VT323',
                        size: 30,
                        weight: 'normal',
                    }
                },
                legend: {
                    display: false,
                },
                tooltip: {
                    bodyFont: {
                        family: 'VT323',
                        size: 20
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: 'lightgray',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                y: {
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'VT323',
                            size: 20
                        }
                    }
                }
            }
        }
    });
}
