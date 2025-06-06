function iniciar() {
    const iniciar = document.getElementById('iniciar');

    iniciar.style.display = "none"
}

// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var iniciar_usuario = document.getElementById("iniciar_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = `Olá, ${nome}!`;
        iniciar_usuario.innerHTML = `Boas-vindas, ${nome}!`;

        b_usuario.style.cursor = "default"
    } else {
        window.location = "usuario.html"
    }
}


function sairSessao() {
    window.location = "index.html"
    sessionStorage.clear();
}


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

var questaoAtual = 0;
var contadorPontos = 0;

const receitas = [
    {
        nome: "Espada de Diamante",
        slots: {
            i_1: null, i_2: `diamante`, i_3: null,
            i_4: null, i_5: `diamante`, i_6: null,
            i_7: null, i_8: `graveto`, i_9: null
        },
        imagemResultado: "./assets/Items/276.png",
    },
    {
        nome: "Picareta de Diamante",
        slots: {
            i_1: `diamante`, i_2: `diamante`, i_3: `diamante`,
            i_4: null, i_5: `graveto`, i_6: null,
            i_7: null, i_8: `graveto`, i_9: null
        },
        imagemResultado: "./assets/Items/278.png",
    },
    {
        nome: "Bússola",
        slots: {
            i_1: null, i_2: `ferro`, i_3: null,
            i_4: `ferro`, i_5: `redstone`, i_6: `ferro`,
            i_7: null, i_8: `ferro`, i_9: null
        },
        imagemResultado: "./assets/Items/345.png",
    }
];

function carregarQuestao() {
    limparGrid();

    let receita = receitas[questaoAtual];

    tituloQuestao.innerHTML = `<p style="text-align: center; margin: 0px;">Monte uma ${receita.nome}</p>
                <img src="${receita.imagemResultado}" width="70px" height="70px" style="padding-left: 225px;">
                `;
    resultadoCrafting.innerHTML = "";
    resultadoQuestao.innerHTML = "";

    document.querySelector("button[onclick='verificar()']").disabled = false;
    botaoProxima.disabled = true;

    if (questaoAtual == 1) {
        divHotbar.innerHTML = `
                        <div class="droptarget hotbar" id="hotbar_1" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 1 -->
                                <div class="droptarget item graveto" ondragstart="dragStart(event)" draggable="true"
                                        id="graveto1">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_4" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 2 -->
                                <div class="droptarget item diamante" ondragstart="dragStart(event)" draggable="true"
                                        id="diamante1">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_2" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 3 - Ferro -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="graveto2">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_5" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 4 -->
                                <div class="droptarget item diamante" ondragstart="dragStart(event)" draggable="true"
                                        id="diamante2">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_6" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 5 -->
                                <div class="droptarget item diamante" ondragstart="dragStart(event)" draggable="true"
                                        id="diamante3">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_3" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 6 -->
                                <div class="droptarget item graveto" ondragstart="dragStart(event)" draggable="true"
                                        id="graveto3">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_7" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 7 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro1">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_8" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 8 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro2">
                                </div>
                        </div>
                        <div class="droptarget hotbar" id="hotbar_9" ondrop="drop(event)" ondragover="allowDrop(event)">
                                <!-- Slot 9 -->
                                <div class="droptarget item redstone" ondragstart="dragStart(event)" draggable="true"
                                        id="redstone">
                                </div>
                        </div>
                        `;

    } else if (questaoAtual == 2) {
        divHotbar.innerHTML = `
                        <div class="droptarget hotbar" id="hotbar_1" ondrop="drop(event)" ondragover="allowDrop(event)">
                                
                                <!-- Slot 1 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro1">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_4" ondrop="drop(event)" ondragover="allowDrop(event)">
                                
                                <!-- Slot 2 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro2">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_2" ondrop="drop(event)" ondragover="allowDrop(event)">
                                
                                <!-- Slot 3 - Ferro -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro3">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_5" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 4 -->
                                <div class="droptarget item diamante" ondragstart="dragStart(event)" draggable="true"
                                        id="diamante1">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_6" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 5 -->
                                <div class="droptarget item diamante" ondragstart="dragStart(event)" draggable="true"
                                        id="diamante2">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_3" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 6 -->
                                <div class="droptarget item graveto" ondragstart="dragStart(event)" draggable="true"
                                        id="graveto1">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_7" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 7 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro4">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_8" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 8 -->
                                <div class="droptarget item ferro" ondragstart="dragStart(event)" draggable="true"
                                        id="ferro5">
                                </div>
                        
                        </div>
                        <div class="droptarget hotbar" id="hotbar_9" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                                <!-- Slot 9 -->
                                <div class="droptarget item redstone" ondragstart="dragStart(event)" draggable="true"
                                        id="redstone1">
                        </div>
                </div>
                        `;

        botaoProxima.innerHTML = `Finalizar`;
    }
}

function verificar() {
    var receita = receitas[questaoAtual];
    var correta = true;

    for (let slot in receita.slots) {
        const slotElement = document.getElementById(slot);
        const item = slotElement.querySelector(".item");
        const esperado = receita.slots[slot];

        if (esperado == null && item != null) {
            correta = false;
            break;
        } else if (esperado != null) {
            if (!item || !item.classList.contains(esperado)) {
                correta = false;
                break;
            }
        }
    }

    if (correta) {
        resultadoCrafting.innerHTML =
            `<img src="${receita.imagemResultado}" width="70px" height="70px">`;

        resultadoQuestao.innerHTML =
            `<img src="./assets/Items/Correto.png" width="100px" height="100px">`;

        contadorPontos++;
    } else {
        resultadoQuestao.innerHTML =
            `<img src="./assets/Items/Incorreto.png" width="80px" height="80px">`;
    }

    document.querySelector("button[onclick='verificar()']").disabled = true;
    botaoProxima.disabled = false;
}

function proximaQuestao() {
    questaoAtual++;

    if (questaoAtual < receitas.length) {
        carregarQuestao();
    } else {
        mostrarResultadoFinal();
    }
}

function limparGrid() {
    for (let i = 1; i <= 9; i++) {
        let slot = document.getElementById(`i_${i}`);
        if (slot) slot.innerHTML = "";
    }
    console.log(`Pontuação atual: ${contadorPontos}`)
}


function cadastrar() {
    var fkUsuario = sessionStorage.getItem("ID_USUARIO");
    var fkQuiz = 1;
    var qtdAcerto = contadorPontos;
    var pontuacao = contadorPontos * 10;


    fetch("/quiz/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuarioServer: fkUsuario,
            fkQuizServer: fkQuiz,
            qtdAcertoServer: qtdAcerto,
            pontuacaoServer: pontuacao
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                console.log(resposta);

            } else {
                console.log(resposta);
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function mostrarResultadoFinal() {

    cadastrar();

    var mensagem;
    if (contadorPontos == 0) {
        mensagem = `
                        <div id="divMensagemFinal">
                <p class="titulo">Quiz finalizado!</p>
                <p>
                Nhe, você conseguiu errar todos os craftings! 
                <br>
                Acho que precisa estudar um pouco mais...
                </p>
                <button onclick="irParaDashboard()" class="botao">Ver Resultados</a>         
                </div>
                        `;
    } else if (contadorPontos == 1) {
        mensagem = `
                        <div id="divMensagemFinal">
                <p class="titulo">Quiz finalizado!</p>
                <p>
                Até que foi, você acertou <span style="font-size: 26px; color: red;">${contadorPontos}</span> de ${receitas.length} craftings! 
                <br>
                Talvez se jogar mais um pouco, pegue as manhas!
                </p>
                <button onclick="irParaDashboard()" class="botao">Ver Resultados</a>
                </div>
                        `;
    } else if (contadorPontos == 2) {
        mensagem = `
                        <div id="divMensagemFinal">
                <p class="titulo">Quiz finalizado!</p>
                <p>
                Uau, muito bem, você acertou <span style="font-size: 26px; color: yellow;">${contadorPontos}</span> de ${receitas.length} craftings!
                <br>
                Você mostrou ser um Construtor de respeito!
                </p>
                <button onclick="irParaDashboard()" class="botao">Ver Resultados</a>
                </div>
                        `;
    } else {
        mensagem = `
                        <div id="divMensagemFinal">
                <p class="titulo">Quiz finalizado!</p>
                <p>
                Wow, parabéns, você acertou  <span style="font-size: 26px; color: green;">${contadorPontos}</span> de ${receitas.length} creftings!
                <br>
                Você se mostrou ser um Crafter Supremo, nunca duvidei de você!
                </p>
                <button onclick="irParaDashboard()" class="botao">Ver Resultados</a>
                </div>
                `;
    }

    divCraftingTable.innerHTML = mensagem;
}

function irParaDashboard() {
    window.location = "./dashboard.html"
}
