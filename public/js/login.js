function exibirSenha() {

    if (i_senhaLogin.type == "password") {
        i_senhaLogin.type = "text";
        iconeEyesLogin.innerHTML = `<i class="fa fa-eye-slash" aria-hidden=" true" style="font-size: 18px;"></i>`;
    } else if (i_senhaLogin.type == 'text') {
        i_senhaLogin.type = "password";
        iconeEyesLogin.innerHTML = `<i class="fa fa-eye" aria-hidden="true"></i>`;
    }

}