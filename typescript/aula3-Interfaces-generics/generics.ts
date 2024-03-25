function caixaMagica<T>(item: T): any {
  console.log(`Item: ${item}, Tipo: ${typeof item}`);
}

caixaMagica("Joana Dark");
caixaMagica(100);
caixaMagica(false);

function caixaDupla<T, U>(item1: T, item2: U): any {
  console.log(
    `Caixa Dupla, item 1 = ${item1}/${typeof item1}, item 2 = ${item2}/${typeof item2}`
  );
}

caixaDupla("Joana Dark", 99);
