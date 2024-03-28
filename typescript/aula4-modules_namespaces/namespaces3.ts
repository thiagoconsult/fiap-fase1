interface Pessoas {
  nome: string;
  sobrenome: string;

  saudacao(): any;
}

abstract class Pessoa implements Pessoas {
  idade: number;

  constructor(public nome: string, public sobrenome: string, idade: number) {
    this.idade = idade;
  }

  saudacao() {
    console.log(`Nome: ${this.nome} ${this.sobrenome}, idade: ${this.idade}`);
  }
}

export namespace Escola {
  export class Aluno extends Pessoa {
    curso: string;

    constructor(nome: string, sobrenome: string, idade: number, curso: string) {
      super(nome, sobrenome, idade);
      this.curso = curso;
    }

    saudacao(): void {
      console.log(
        `Aluno: ${this.nome} ${this.sobrenome}, idade: ${this.idade}, curso: ${this.curso}`
      );
    }
  }

  export class Professor extends Pessoa {
    disciplina: string;

    constructor(
      nome: string,
      sobrenome: string,
      idade: number,
      disciplina: string
    ) {
      super(nome, sobrenome, idade);
      this.disciplina = disciplina;
    }

    saudacao(): void {
      console.log(
        `Professor: ${this.nome} ${this.sobrenome}, idade: ${this.idade}, disciplina: ${this.disciplina}`
      );
    }
  }
}

let thiago = new Escola.Aluno("Thiago", "Lima Dyonisio", 39, "ADS");

thiago.saudacao();

let maria = new Escola.Professor("Maria", "das Graças", 100, "Teologia");

maria.saudacao();
