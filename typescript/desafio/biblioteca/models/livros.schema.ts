import { Schema, model } from "mongoose";
import { ILivros } from "./livros.interface";
// import { run } from "../database/database";

// let conn = run();

const livroSchema = new Schema<ILivros>({
  titulo: String,
  autor: String,
  isbn: String,
  anoPublicacao: Date,
});

export const livro = model<ILivros>("Livros", livroSchema);
