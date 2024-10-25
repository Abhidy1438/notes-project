import mongoose from "mongoose";
import { env } from "../environment/variable.js";

let connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB!");
  } catch (error) {
    console.log("error");
    process.exit(1);
  }
};

export { connectDB };
