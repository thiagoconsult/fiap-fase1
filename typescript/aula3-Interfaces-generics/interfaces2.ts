interface Pessoas {
  nome: string;
  sobrenome: string;
  idade: number;

  saudacao(): void;
}

abstract class Pessoa implements Pessoas {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  saudacao(): void {
    console.log(
      `Seja bem vindo, ${this.nome} ${this.sobrenome}, ${this.idade}`
    );
  }
}

class Aluno extends Pessoa {
  curso: string;

  constructor(nome: string, sobrenome: string, idade: number, curso: string) {
    super(nome, sobrenome, idade);
    this.curso = curso;
  }

  saudacao(): void {
    console.log(
      `Seja bem vindo ao curso ${this.curso}, ${this.nome} ${this.sobrenome}, ${this.idade}`
    );
  }
}

class Professor extends Pessoa {
  especialidade: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    especialidade: string
  ) {
    super(nome, sobrenome, idade);
    this.especialidade = especialidade;
  }

  saudacao(): void {
    console.log(
      `Seja bem vindo, Professor ${this.nome} ${this.sobrenome}, ${this.idade}, matéria ${this.especialidade}`
    );
  }
}

let joanaDark = new Aluno(
  "Joana",
  "Dark",
  99,
  "Montagem e manutenção de panelas"
);
joanaDark.saudacao();

let domPedro = new Professor(
  "Dom Pedro",
  "De Orleans e Bragança",
  90,
  "Latin para Latinos"
);

domPedro.saudacao();
