"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
const mongoose_1 = require("mongoose");
// import { run } from "../database/database";
// let conn = run();
const livroSchema = new mongoose_1.Schema({
    titulo: String,
    autor: String,
    isbn: String,
    anoPublicacao: Date,
});
exports.livro = (0, mongoose_1.model)("Livros", livroSchema);
