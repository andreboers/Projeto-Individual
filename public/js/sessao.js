// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById('b_usuario');

    if (email != null && nome != null) {
        b_usuario.innerHTML = `Olá, ${nome}!`;

        b_usuario.removeAttribute('href');
        b_usuario.style.cursor = 'default'

        navQuiz.style.display = 'flex';
        navDashboard.style.display = 'flex';
        navSair.style.display = 'flex';
        navSair.style.cursor = 'pointer'

    } else {
        navQuiz.style.display = 'none';
        navDashboard.style.display = 'none';
        navSair.style.display = 'none';
    }
}

function sairSessao() {
    window.location = 'index.html'
    sessionStorage.clear();
}
