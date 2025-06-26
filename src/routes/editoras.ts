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


router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nomeEditora } = req.body;
  const editora = await EditoraModel.findByIdAndUpdate(id, { nomeEditora }, { new: true });
  if (!editora) {
    return res.status(404).json({ message: "Editora não encontrada" });
  }
  res.json(editora);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const editora = await EditoraModel.findByIdAndDelete(id);
  if (!editora) {
    return res.status(404).json({ message: "Editora não encontrada" });
  }
  res.status(204).send();
});

export default router;