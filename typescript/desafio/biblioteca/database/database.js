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
exports.run = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let conn = null;
const uri = process.env.URI_MONGO;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        if (conn === null) {
            try {
                conn = yield mongoose_1.default
                    .connect(uri)
                    .then(() => console.log("Mongo conected"));
                return conn;
            }
            catch (error) {
                console.log(error);
            }
        }
        return conn;
    });
}
exports.run = run;
