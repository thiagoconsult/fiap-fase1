//Classe Pessoa
class Pessoa {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimir() {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}`);
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }
}

//Classe Aluno extends Pessoa
class Aluno extends Pessoa {
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    super(nome, idade);
    this.curso = curso;
  }

  imprimir(): void {
    console.log(
      `Aluno: ${this.getNome()}, idade: ${this.getIdade()}, curso: ${
        this.curso
      }`
    );
  }
}

//Classe Professor extends Pessoa
class Professor extends Pessoa {
  especialidade: string;

  constructor(nome: string, idade: number, especialidade: string) {
    super(nome, idade);
    this.especialidade = especialidade;
  }

  imprimir(): void {
    console.log(
      `Professor: ${this.getNome()}, idade: ${this.getIdade()}, especialidade: ${
        this.especialidade
      }`
    );
  }
}

//Instancia Aluno
let thiago = new Aluno("Thiago", 39, "Desenvolvimento Full Stack");
thiago.imprimir();

//Instancia Professor
let maria = new Professor("Maria", 55, "Matemárica");
maria.imprimir();
