import express, { Express, Request, Response, NextFunction } from "express";
import { create } from "./biblioteca/controllers/livros.controller";
import { run } from "./biblioteca/database/database";

const PORT = process.env.PORT;

const app: Express = express();
run();

app.use(express.json());

app.get("/healt", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get("/livros", (req: Request, res: Response) => {
  res.json({ livro: "teste" });
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
