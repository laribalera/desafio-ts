import { Router, Request, Response } from "express";
import { LivroModel } from "../models/Livro";
import { EditoraModel } from "../models/Editora";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { titulo, autor, isbn, ano_publicacao, nomeEditora } = req.body;

        // buscando editora pelo nome para obter o ID (garantindo usabilidade real)
        const editora = await EditoraModel.findOne({ nomeEditora });

        if (!editora) {
            return res.status(404).json({ message: "editora não encontrada" });
        }

        const newLivro = new LivroModel({
            titulo,
            autor,
            isbn,
            ano_publicacao,
            editoraId: editora._id
        });

        await newLivro.save();

        res.status(201).json(newLivro);
    } catch (error) {
        console.error("erro ao cadastrar livro:", error);
        res.status(500).json({ message: "erro interno ao cadastrar livro" });
    }
});


router.get("/", async (req: Request, res: Response) => {
    const livros = await LivroModel.find().populate("editoraId", "nomeEditora");
    res.json(livros);
});

router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, autor, isbn, ano_publicacao, nomeEditora } = req.body;

    try {
        const editora = await EditoraModel.findOne({ nomeEditora });
        // garantir que a editora existe antes de atualizar o livro
        if (!editora) {
            return res.status(404).json({ message: "editora não encontrada" });
        }

        const livro = await LivroModel.findByIdAndUpdate(
            id,
            { titulo, autor, isbn, ano_publicacao, editoraId: editora._id },
            { new: true }
        ).populate("editoraId", "nomeEditora");

        if (!livro) {
            return res.status(404).json({ message: "livro não encontrado" });
        }

        if (!titulo || !autor || !isbn || !ano_publicacao || !nomeEditora) {
            return res.status(400).json({ message: "campos obrigatorios faltando" });
        }

        res.json(livro);
    } catch (error) {
        console.error("erro ao atualizar livro:", error);
        res.status(500).json({ message: "erro interno ao atualizar livro" });
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const livro = await LivroModel.findByIdAndDelete(id);

        if (!livro) {
            return res.status(404).json({ message: "livro não encontrado" });
        }

        res.json({ message: "livro deletado com sucesso" });
    } catch (error) {
        console.error("erro ao deletar livro:", error);
        res.status(500).json({ message: "erro interno ao deletar livro" });
    }
});

export default router;