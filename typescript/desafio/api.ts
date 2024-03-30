import express, { Express, Request, Response } from "express";
import { create } from "./biblioteca/controllers/livros.controller";
import { run } from "./biblioteca/database/database";

const app = express();
run();

app.use(express.json());

app.get("/healt", (req, res) => {
  res.sendStatus(200);
});

app.get("/livros", (req, res) => {
  res.json({ livro: "teste" });
});

app.post("/livros", async (req, res) => {
  let livro = req.body;
  let result = await create(livro);
  res.json(result);
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log("server started at port 3000 ");
});
