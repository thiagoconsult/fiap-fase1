class Itens<T> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  imprime() {
    console.log(this.item, typeof this.item);
  }
}

let maria = new Itens("Maria");
maria.imprime();

let x = new Itens([10, 20]);
x.imprime();
