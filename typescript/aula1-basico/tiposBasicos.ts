class TiposBasicos {
  nome: string = "Thiago"; //string
  idade: number = 39; //number
  isAdmin: boolean = true; // boolean

  imprimir() {
    console.log(this.nome, this.idade, this.isAdmin);
  }
}

let teste = new TiposBasicos();
teste.imprimir();
