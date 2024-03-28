// Implementaçao de Inversão de Controle (IoC) com Injeção de Dependência (DI)
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.createEmail = function (login) {
        console.log("E-mail criado com sucesso ".concat(login
            .replace(/\s/gm, "")
            .toLowerCase(), "@thiagolab.com.br"));
    };
    return Email;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, sobrenome, email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    }
    Usuario.prototype.newEmail = function () {
        this.email.createEmail("".concat(this.nome, ".").concat(this.sobrenome));
    };
    return Usuario;
}());
var email = new Email();
var thiago = new Usuario("Thiago", "Lima Dyonisio", email);
thiago.newEmail();
