class Pessoa {
  constructor(public nome: string) {}

  imprimir() {
    console.log(`Nome: ${this.nome}`);
  }
}

class Carro {
  modelo: string;

  constructor(modelo: string) {
    this.modelo = modelo;
  }

  imprimir() {
    console.log(`Modelo: ${this.modelo}`);
  }
}

let maria = new Pessoa("Maria");
maria.imprimir();

let gol = new Carro("Gol");
gol.imprimir();
