import mongoose from "mongoose";

const EditoraSchema = new mongoose.Schema({
  nomeEditora: { type: String, required: true },
});

export const EditoraModel = mongoose.model("Editora", EditoraSchema);
