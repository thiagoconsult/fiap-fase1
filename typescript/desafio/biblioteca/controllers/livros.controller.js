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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLivros = exports.create = void 0;
const livros_schema_1 = require("../models/livros.schema");
function create(_livro) {
    return __awaiter(this, void 0, void 0, function* () {
        let newLivro = new livros_schema_1.livro({
            titulo: _livro.titulo,
            autor: _livro.autor,
            isbn: _livro.isbn,
            anoPublicacao: _livro.anoPublicacao,
        });
        let result = yield newLivro.save();
        // .then(() => console.log("Deu certo"))
        // .catch((err) => console.log("Deu ruim"));
        if (result)
            return result;
        return null;
    });
}
exports.create = create;
function getLivros() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield livros_schema_1.livro.find({});
        if (result) {
            return result;
        }
        return null;
    });
}
exports.getLivros = getLivros;
