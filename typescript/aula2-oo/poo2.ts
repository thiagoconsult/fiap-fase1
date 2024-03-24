class Pessoa {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  imprimir() {
    return console.log(`Nome: ${this.nome}, idade:"${this.idade}`);
  }
}

const thiago = new Pessoa("Thiago", 39);

console.log(thiago.getNome());
console.log(thiago.getIdade());
thiago.imprimir();
