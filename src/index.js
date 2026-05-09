import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed!", err);
  });

// (async () => {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   app.on(error,(err)=>{
//     console.log("Error connecting to MongoDB:", err);
//     throw err;
//   })
//   console.log("Connected to MongoDB");
// })();
// import { constants } from "node:buffer";import { error } from "node:console";
