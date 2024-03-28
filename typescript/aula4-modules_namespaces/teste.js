var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome));
    };
    return Pessoa;
}());
var Carro = /** @class */ (function () {
    function Carro(modelo) {
        this.modelo = modelo;
    }
    Carro.prototype.imprimir = function () {
        console.log("Modelo: ".concat(this.modelo));
    };
    return Carro;
}());
var maria = new Pessoa("Maria");
maria.imprimir();
var gol = new Carro("Gol");
gol.imprimir();
