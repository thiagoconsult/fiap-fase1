var HelloWorld2 = /** @class */ (function () {
    function HelloWorld2(nome) {
        this.msg = "Seja bem vindo";
        this.nome = nome;
    }
    HelloWorld2.prototype.imprimir = function () {
        console.log("".concat(this.msg, ", ").concat(this.nome));
    };
    return HelloWorld2;
}());
var thiago = new HelloWorld2("Thiago");
thiago.imprimir();
