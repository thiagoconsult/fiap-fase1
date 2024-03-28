var Matematica;
(function (Matematica) {
    function Somar(x, y) {
        return x + y;
    }
    Matematica.Somar = Somar;
})(Matematica || (Matematica = {}));
console.log(Matematica.Somar(10, 20));
