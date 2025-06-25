import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("conectado ao banco");
  } catch (error) {
    console.error("erro ao conectar:", error);
    process.exit(1);
  }
};
