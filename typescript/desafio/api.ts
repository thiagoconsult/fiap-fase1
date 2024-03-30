import express, { Express, Request, Response, NextFunction } from "express";
import { create, getLivros } from "./biblioteca/controllers/livros.controller";
import { connect } from "./biblioteca/database/database";

const PORT = process.env.PORT;

const app: Express = express();

connect();

app.use(express.json());

app.get("/healt", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get("/livros", async (req: Request, res: Response) => {
  let livros = await getLivros();
  res.json(livros);
});

app.post("/livros", async (req: Request, res: Response) => {
  let livro = req.body;
  let result = await create(livro);
  res.json(result);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT} `);
});
