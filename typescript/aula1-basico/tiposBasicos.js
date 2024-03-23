var TiposBasicos = /** @class */ (function () {
    function TiposBasicos() {
        this.nome = "Thiago"; //string
        this.idade = 39; //number
        this.isAdmin = true; // boolean
    }
    TiposBasicos.prototype.imprimir = function () {
        console.log(this.nome, this.idade, this.isAdmin);
    };
    return TiposBasicos;
}());
var teste = new TiposBasicos();
teste.imprimir();
