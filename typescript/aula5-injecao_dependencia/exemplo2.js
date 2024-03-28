"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = exports.Emails = void 0;
var Emails;
(function (Emails) {
    var Email = /** @class */ (function () {
        function Email() {
        }
        Email.prototype.createEmail = function (login) {
            console.log("".concat(login.replace(/\s/gm, "").toLowerCase(), "@teste.com.br"));
        };
        return Email;
    }());
    Emails.Email = Email;
})(Emails || (exports.Emails = Emails = {}));
var Escola;
(function (Escola) {
    var Aluno = /** @class */ (function () {
        function Aluno(nome, sobrenome, curso, email) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.curso = curso;
            this.email = email;
        }
        Aluno.prototype.newEmail = function () {
            this.email.createEmail("".concat(this.nome, " ").concat(this.sobrenome));
        };
        Aluno.prototype.saudacao = function () {
            console.log("Nome: ".concat(this.nome, " ").concat(this.sobrenome, ", - Curso: ").concat(this.curso));
        };
        return Aluno;
    }());
    Escola.Aluno = Aluno;
})(Escola || (exports.Escola = Escola = {}));
var email = new Emails.Email();
var joanaDark = new Escola.Aluno("Joana Dark", "Da Silva", "ADS", email);
joanaDark.saudacao();
joanaDark.newEmail();
