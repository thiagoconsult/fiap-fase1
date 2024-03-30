"use strict";
// import mongoose from "mongoose";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
// let conn: any = null;
// const uri: any = process.env.URI_MONGO;
// export async function run() {
//   if (conn === null) {
//     try {
//       conn = await mongoose
//         .connect(uri)
//         .then(() => console.log("Mongo conected"));
//       return conn;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return conn;
// }
const mongoose_1 = __importDefault(require("mongoose"));
const uri = process.env.URI_MONGO;
function connect() {
    try {
        mongoose_1.default
            .connect(uri)
            .then(() => console.log("Connected at MongoDB with success!"));
    }
    catch (error) {
        console.log("MongoDB error connect", error);
    }
}
exports.connect = connect;
