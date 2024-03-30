// import mongoose from "mongoose";

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

import mongoose from "mongoose";

const uri: any = process.env.URI_MONGO;

export function connect() {
  try {
    mongoose
      .connect(uri)
      .then(() => console.log("Connected at MongoDB with success!"));
  } catch (error) {
    console.log("MongoDB error connect", error);
  }
}
