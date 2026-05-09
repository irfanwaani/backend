import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(`Connected to MongoDB & host is: ${connection.connection.host}`);
  } catch (error) {
    console.error("Connection failed!", error);
    process.exit(1);
  }
};

export default connectDB;