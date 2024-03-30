"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livros_controller_1 = require("./biblioteca/controllers/livros.controller");
const database_1 = require("./biblioteca/database/database");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
(0, database_1.run)();
app.use(express_1.default.json());
app.get("/healt", (req, res) => {
    res.sendStatus(200);
});
app.get("/livros", (req, res) => {
    res.json({ livro: "teste" });
});
app.post("/livros", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let livro = req.body;
    let result = yield (0, livros_controller_1.create)(livro);
    res.json(result);
}));
app.use((req, res, next) => {
    res.sendStatus(404);
});
app.listen(PORT, () => {
    console.log(`server started at port ${PORT} `);
});
