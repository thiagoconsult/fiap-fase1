class HelloWorld2 {
  nome: string;
  msg: string = "Seja bem vindo";

  constructor(nome: string) {
    this.nome = nome;
  }

  imprimir() {
    console.log(`${this.msg}, ${this.nome}`);
  }
}

let thiago = new HelloWorld2("Thiago");

thiago.imprimir();
