export namespace Escolinha {
  interface Pessoa {
    nome: string;
    idade: number;

    saudacao(): any;
  }

  abstract class Pessoas implements Pessoa {
    constructor(
      public nome: string,
      public idade: number,
      protected nacionalidade: string
    ) {}

    saudacao(): any {
      console.log(`${(this.nome, this.idade)}`);
    }
  }

  export class Aluno extends Pessoas {
    // private apelido: string;

    constructor(
      nome: string,
      idade: number,
      nacionalidade: string,
      private apelido: string
    ) {
      super(nome, idade, nacionalidade);
      this.apelido = apelido;
    }
    saudacao(): any {
      console.log(
        `A pessoa: ${this.nome} tem ${this.idade} anos de idade, o apelido é ${this.apelido}, ele é ${this.nacionalidade}`
      );
    }
  }
}

let ozorio = new Escolinha.Aluno("Ozorinho", 100, "Marciano", "Marcio");
ozorio.saudacao();
