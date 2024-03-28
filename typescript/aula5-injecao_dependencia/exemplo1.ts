// Implementaçao de Inversão de Controle (IoC) com Injeção de Dependência (DI)

class Email {
  createEmail(login: string): any {
    console.log(
      `E-mail criado com sucesso ${login
        .replace(/\s/gm, "")
        .toLowerCase()}@thiagolab.com.br`
    );
  }
}

class Usuario {
  nome: string;
  sobrenome: string;
  private email: Email;

  constructor(nome: string, sobrenome: string, email: Email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
  }

  newEmail(): void {
    this.email.createEmail(`${this.nome}.${this.sobrenome}`);
  }
}

let email = new Email();
let thiago = new Usuario("Thiago", "Lima Dyonisio", email);

thiago.newEmail();
