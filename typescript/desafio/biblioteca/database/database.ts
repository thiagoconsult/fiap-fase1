import mongoose from "mongoose";

let conn: any = null;

const uri: string =
  "mongodb+srv://thiagoconsultx:Abacaxi000@biblioteca.x08pzd8.mongodb.net/?retryWrites=true&w=majority&appName=Biblioteca";

export async function run() {
  if (conn === null) {
    try {
      conn = await mongoose
        .connect(uri)
        .then(() => console.log("Mongo conected"));
      return conn;
    } catch (error) {
      console.log(error);
    }
  }

  return conn;
}
