function caixaMagica(item) {
    console.log("Item: ".concat(item, ", Tipo: ").concat(typeof item));
}
caixaMagica("Joana Dark");
caixaMagica(100);
caixaMagica(false);
function caixaDupla(item1, item2) {
    console.log("Caixa Dupla, item 1 = ".concat(item1, "/").concat(typeof item1, ", item 2 = ").concat(item2, "/").concat(typeof item2));
}
caixaDupla("Joana Dark", 99);
