import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/db";
import editorasRouter from "./routes/editoras";
//import livrosRouter from "./routes/livros";

dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

app.use("/editora", editorasRouter);
//app.use("/livros", livrosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

