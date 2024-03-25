var MeuCarro = /** @class */ (function () {
    function MeuCarro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    MeuCarro.prototype.ligar = function () {
        console.log("Ligando ".concat(this.marca, " - ").concat(this.modelo));
    };
    return MeuCarro;
}());
var gol = new MeuCarro("VW", "Gol", 2000);
gol.ligar();
