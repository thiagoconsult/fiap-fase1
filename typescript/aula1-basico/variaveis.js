var Saudacao = /** @class */ (function () {
    function Saudacao() {
        this.nome = "Thiago";
        this.idade = 39;
    }
    Saudacao.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome, ", idade: ").concat(this.idade, "."));
    };
    return Saudacao;
}());
var saudacao = new Saudacao();
saudacao.imprimir();
