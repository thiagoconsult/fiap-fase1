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
exports.Escolinha = void 0;
var Escolinha;
(function (Escolinha) {
    var Pessoas = /** @class */ (function () {
        function Pessoas(nome, idade, nacionalidade) {
            this.nome = nome;
            this.idade = idade;
            this.nacionalidade = nacionalidade;
        }
        Pessoas.prototype.saudacao = function () {
            console.log("".concat((this.nome, this.idade)));
        };
        return Pessoas;
    }());
    var Aluno = /** @class */ (function (_super) {
        __extends(Aluno, _super);
        // private apelido: string;
        function Aluno(nome, idade, nacionalidade, apelido) {
            var _this = _super.call(this, nome, idade, nacionalidade) || this;
            _this.apelido = apelido;
            _this.apelido = apelido;
            return _this;
        }
        Aluno.prototype.saudacao = function () {
            console.log("A pessoa: ".concat(this.nome, " tem ").concat(this.idade, " anos de idade, o apelido \u00E9 ").concat(this.apelido, ", ele \u00E9 ").concat(this.nacionalidade));
        };
        return Aluno;
    }(Pessoas));
    Escolinha.Aluno = Aluno;
})(Escolinha || (exports.Escolinha = Escolinha = {}));
var ozorio = new Escolinha.Aluno("Ozorinho", 100, "Marciano", "Marcio");
ozorio.saudacao();
