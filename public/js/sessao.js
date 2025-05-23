// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = `Olá, ${nome}!`;

        document.getElementById('b_usuario').removeAttribute('href');
        document.getElementById('b_usuario').classList.add('nomeDoUsuario');

        document.getElementById('navQuiz').classList.remove('hiddenHeader');
        document.getElementById('navQuiz').classList.add('visibleHeader');

        document.getElementById('navDashboard').classList.remove('hiddenHeader');
        document.getElementById('navDashboard').classList.add('visibleHeader');

        document.getElementById('navSair').classList.remove('hiddenHeader');
        document.getElementById('navSair').classList.add('visibleHeader');


    } else {

    }
}

function sairSessao() {
    window.location = "index.html"
    sessionStorage.clear();
}


// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}