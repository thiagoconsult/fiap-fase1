var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Seja bem vindo, ".concat(this.nome, " ").concat(this.sobrenome, ", ").concat(this.idade));
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, sobrenome, idade, curso) {
        var _this = _super.call(this, nome, sobrenome, idade) || this;
        _this.curso = curso;
        return _this;
    }
    Aluno.prototype.saudacao = function () {
        console.log("Seja bem vindo ao curso ".concat(this.curso, ", ").concat(this.nome, " ").concat(this.sobrenome, ", ").concat(this.idade));
    };
    return Aluno;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, sobrenome, idade, especialidade) {
        var _this = _super.call(this, nome, sobrenome, idade) || this;
        _this.especialidade = especialidade;
        return _this;
    }
    Professor.prototype.saudacao = function () {
        console.log("Seja bem vindo, Professor ".concat(this.nome, " ").concat(this.sobrenome, ", ").concat(this.idade, ", mat\u00E9ria ").concat(this.especialidade));
    };
    return Professor;
}(Pessoa));
var joanaDark = new Aluno("Joana", "Dark", 99, "Montagem e manutenção de panelas");
joanaDark.saudacao();
var domPedro = new Professor("Dom Pedro", "De Orleans e Bragança", 90, "Latin para Latinos");
domPedro.saudacao();
