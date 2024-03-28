import { Somar, subtrair } from "./modulos";
import { Matematica } from "./namespaces2";
import { Escola } from "./namespaces3";
import { Escolinha } from "./namespaces4";

console.log("Somar: ", Somar(10, 20));
console.log("Subtrair: ", subtrair(10, 20));

console.log("Somar namespaces 2: ", Matematica.Somar(100, 200));

let joao = new Escola.Aluno("João do Pulo", "Oliveira", 100, "Agricultura");
joao.saudacao();

let joana = new Escola.Professor("Joana Dark", "Da Silva", 100, "Agricultura");
joana.saudacao();

let madalena = new Escolinha.Aluno("Madalena", 100, "Acre", "Flavia");
madalena.saudacao();
