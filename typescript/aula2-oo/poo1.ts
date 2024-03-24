class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Seja bem vindo, ${this.nome}, ${this.idade}`);
  }
}

const thiago = new Pessoa("Thiago", 39);

thiago.saudacao();
