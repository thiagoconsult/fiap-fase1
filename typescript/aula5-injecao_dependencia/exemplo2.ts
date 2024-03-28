export namespace Emails {
  export class Email {
    createEmail(login: string): any {
      console.log(`${login.replace(/\s/gm, "").toLowerCase()}@teste.com.br`);
    }
  }
}

export namespace Escola {
  interface Pessoa {
    nome: string;
    sobrenome: string;

    saudacao(): any;
  }

  export class Aluno implements Pessoa {
    nome: string;
    sobrenome: string;
    curso: string;
    email: Emails.Email;

    constructor(
      nome: string,
      sobrenome: string,
      curso: string,
      email: Emails.Email
    ) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.curso = curso;
      this.email = email;
    }

    newEmail() {
      this.email.createEmail(`${this.nome} ${this.sobrenome}`);
    }

    saudacao() {
      console.log(
        `Nome: ${this.nome} ${this.sobrenome}, - Curso: ${this.curso}`
      );
    }
  }
}

let email = new Emails.Email();
let joanaDark = new Escola.Aluno("Joana Dark", "Da Silva", "ADS", email);

joanaDark.saudacao();
joanaDark.newEmail();
