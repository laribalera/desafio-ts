import { Editora } from "./editora";

interface ILivro {
    titulo: string;
    autor: string;
    isbn: string;
    ano_publicacao: number;
}

export class Livro implements ILivro {
    titulo: string;
    autor: string;
    isbn: string;
    ano_publicacao: number;
    editora: Editora;

    constructor(titulo: string, autor: string, isbn: string, ano_publicacao: number, editora: Editora) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.ano_publicacao = ano_publicacao;
        this.editora = editora;
    }
}