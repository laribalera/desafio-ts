import mongoose, { Document } from "mongoose";

export interface ILivro extends Document {
    titulo: string;
    autor: string;
    isbn: string;
    ano_publicacao: number;
    editoraId: mongoose.Types.ObjectId;
}

const LivroSchema = new mongoose.Schema<ILivro>({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    isbn: { type: String, required: true },
    ano_publicacao: { type: Number, required: true },
    editoraId: { type: mongoose.Schema.Types.ObjectId, ref: "Editora", required: true }
});

export const LivroModel = mongoose.model<ILivro>("Livro", LivroSchema);
