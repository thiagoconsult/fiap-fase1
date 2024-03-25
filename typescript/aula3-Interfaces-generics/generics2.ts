interface Itens<T> {
  item: T;

  imprime(): any;
}

class Pais implements Itens<string> {
  item: string;

  constructor(item: string) {
    this.item = item;
  }

  imprime() {
    console.log(typeof this.item);
  }
}

let brasil = new Pais("Brasil");
brasil.imprime();

class Objetos implements Itens<string> {
  item: string;

  constructor(item: string) {
    this.item = item;
  }

  imprime() {
    console.log(this.item);
  }
}

let caneta = new Objetos("Caneta Azul");
caneta.imprime();
