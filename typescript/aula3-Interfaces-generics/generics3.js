var Itens = /** @class */ (function () {
    function Itens(item) {
        this.item = item;
    }
    Itens.prototype.imprime = function () {
        console.log(this.item, typeof this.item);
    };
    return Itens;
}());
var maria = new Itens("Maria");
maria.imprime();
var x = new Itens([10, 20]);
x.imprime();
