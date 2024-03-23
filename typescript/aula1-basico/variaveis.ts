class Saudacao {
  nome: string = "Thiago";
  idade = 39;

  imprimir() {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}.`);
  }
}

let saudacao = new Saudacao();
saudacao.imprimir();
