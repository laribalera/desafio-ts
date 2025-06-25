// src/routes/editoras.ts
import { Router, Request, Response } from "express";
import { EditoraModel } from "../models/Editora";


const router = Router();  

router.post("/", async (req: Request, res: Response) => {
  const { nomeEditora } = req.body;
  const editora = new EditoraModel({ nomeEditora });
  await editora.save();
  res.status(201).json(editora);
});

router.get("/", async (req: Request, res: Response) => {
  const editoras = await EditoraModel.find();
  res.json(editoras);
});



export default router;