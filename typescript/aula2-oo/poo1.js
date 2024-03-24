var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Seja bem vindo, ".concat(this.nome, ", ").concat(this.idade));
    };
    return Pessoa;
}());
var thiago = new Pessoa("Thiago", 39);
thiago.saudacao();
