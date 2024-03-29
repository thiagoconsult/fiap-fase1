import { ILivros } from "../models/livros.interface";
import { livro } from "../models/livros.schema";

export async function create(_livro: ILivros) {
  let newLivro = new livro({
    titulo: _livro.titulo,
    autor: _livro.autor,
    isbn: _livro.isbn,
    anoPublicacao: _livro.anoPublicacao,
  });

  let result = await newLivro.save();
  // .then(() => console.log("Deu certo"))
  // .catch((err) => console.log("Deu ruim"));
  if (result) return result;

  return null;
}
