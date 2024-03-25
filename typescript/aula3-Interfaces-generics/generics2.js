var Pais = /** @class */ (function () {
    function Pais(item) {
        this.item = item;
    }
    Pais.prototype.imprime = function () {
        console.log(typeof this.item);
    };
    return Pais;
}());
var brasil = new Pais("Brasil");
brasil.imprime();
var Objetos = /** @class */ (function () {
    function Objetos(item) {
        this.item = item;
    }
    Objetos.prototype.imprime = function () {
        console.log(this.item);
    };
    return Objetos;
}());
var caneta = new Objetos("Caneta Azul");
caneta.imprime();
