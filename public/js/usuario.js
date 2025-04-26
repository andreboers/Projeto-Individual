
// Função para visualização da senha do campo "Senha Login"
function exibirSenhaLogin() {

    if (i_senhaLogin.type == "password") {
        i_senhaLogin.type = "text";
        iconeEyesLogin.innerHTML = `<i class="fa fa-eye-slash" aria-hidden=" true" style="font-size: 18px;"></i>`;
    } else if (i_senhaLogin.type == 'text') {
        i_senhaLogin.type = "password";
        iconeEyesLogin.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    }
}
// Função para visualização da senha do campo "Senha Cadastro"
function exibirSenhaCadastro() {
    if (i_senhaCadastro.type == "password") {
        i_senhaCadastro.type = "text";
        iconeEyesSenhaCadastro.innerHTML = `<i class="fa fa-eye-slash" aria-hidden=" true" style="font-size: 18px;"></i>`;
    } else if (i_senhaCadastro.type == 'text') {
        i_senhaCadastro.type = "password";
        iconeEyesSenhaCadastro.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    }
}
// Função para visualização da senha do campo "Confirmação de Senha"
function exibirConfirmacaoSenha() {
    if (i_confimacaoSenha.type == "password") {
        i_confimacaoSenha.type = "text";
        iconeEyesConfirmacaoSenha.innerHTML = `<i class="fa fa-eye-slash" aria-hidden=" true" style="font-size: 18px;"></i>`;
    } else if (i_confimacaoSenha.type == 'text') {
        i_confimacaoSenha.type = "password";
        iconeEyesConfirmacaoSenha.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    }
}


// CSS: Função para transição da tela de Login e Cadastro
function irParaCadastro() {
    console.log('Função irParaCadastro chamada!');
    document.getElementById('divContainerLogin').classList.remove('visible');
    document.getElementById('divContainerLogin').classList.add('hidden');
    document.getElementById('divContainerCadastreSe').classList.remove('hidden');
    document.getElementById('divContainerCadastreSe').classList.add('visible');
}

function voltarParaLogin() {
    console.log('Função voltarParaLogin chamada!');
    document.getElementById('divContainerCadastreSe').classList.remove('visible');
    document.getElementById('divContainerCadastreSe').classList.add('hidden');
    document.getElementById('divContainerLogin').classList.remove('hidden');
    document.getElementById('divContainerLogin').classList.add('visible');
}