interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  ligar(): void;
}

class MeuCarro implements Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  ligar() {
    console.log(`Ligando ${this.marca} - ${this.modelo}`);
  }
}

let gol = new MeuCarro("VW", "Gol", 2000);

gol.ligar();
