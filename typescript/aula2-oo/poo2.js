var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.imprimir = function () {
        return console.log("Nome: ".concat(this.nome, ", idade:\"").concat(this.idade));
    };
    return Pessoa;
}());
var thiago = new Pessoa("Thiago", 39);
console.log(thiago.getNome());
console.log(thiago.getIdade());
thiago.imprimir();
