"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Nome: ".concat(this.nome, " ").concat(this.sobrenome, ", idade: ").concat(this.idade));
    };
    return Pessoa;
}());
var Escola;
(function (Escola) {
    var Aluno = /** @class */ (function (_super) {
        __extends(Aluno, _super);
        function Aluno(nome, sobrenome, idade, curso) {
            var _this = _super.call(this, nome, sobrenome, idade) || this;
            _this.curso = curso;
            return _this;
        }
        Aluno.prototype.saudacao = function () {
            console.log("Aluno: ".concat(this.nome, " ").concat(this.sobrenome, ", idade: ").concat(this.idade, ", curso: ").concat(this.curso));
        };
        return Aluno;
    }(Pessoa));
    Escola.Aluno = Aluno;
    var Professor = /** @class */ (function (_super) {
        __extends(Professor, _super);
        function Professor(nome, sobrenome, idade, disciplina) {
            var _this = _super.call(this, nome, sobrenome, idade) || this;
            _this.disciplina = disciplina;
            return _this;
        }
        Professor.prototype.saudacao = function () {
            console.log("Professor: ".concat(this.nome, " ").concat(this.sobrenome, ", idade: ").concat(this.idade, ", disciplina: ").concat(this.disciplina));
        };
        return Professor;
    }(Pessoa));
    Escola.Professor = Professor;
})(Escola || (exports.Escola = Escola = {}));
var thiago = new Escola.Aluno("Thiago", "Lima Dyonisio", 39, "ADS");
thiago.saudacao();
var maria = new Escola.Professor("Maria", "das Graças", 100, "Teologia");
maria.saudacao();
