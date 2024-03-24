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
//Classe Pessoa
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome, ", idade: ").concat(this.idade));
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    return Pessoa;
}());
//Classe Aluno extends Pessoa
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, curso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.curso = curso;
        return _this;
    }
    Aluno.prototype.imprimir = function () {
        console.log("Aluno: ".concat(this.getNome(), ", idade: ").concat(this.getIdade(), ", curso: ").concat(this.curso));
    };
    return Aluno;
}(Pessoa));
//Classe Professor extends Pessoa
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, especialidade) {
        var _this = _super.call(this, nome, idade) || this;
        _this.especialidade = especialidade;
        return _this;
    }
    Professor.prototype.imprimir = function () {
        console.log("Professor: ".concat(this.getNome(), ", idade: ").concat(this.getIdade(), ", especialidade: ").concat(this.especialidade));
    };
    return Professor;
}(Pessoa));
//Instancia Aluno
var thiago = new Aluno("Thiago", 39, "Desenvolvimento Full Stack");
thiago.imprimir();
//Instancia Professor
var maria = new Professor("Maria", 55, "Matemárica");
maria.imprimir();
