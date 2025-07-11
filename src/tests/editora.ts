import { Livro } from "./livro";

export class Editora{
    nome_editora: string;
    livros : Livro[];

     constructor(nome_editora: string, livros: Livro[] = []) {
        this.nome_editora = nome_editora;
        this.livros = livros;
    }


    // manipulação do array da editora
    adicionarLivro(livro: Livro) {
        this.livros.push(livro)
    }
    
    removerLivro(isbn: string) {
        this.livros = this.livros.filter(livro => livro.isbn !== isbn);
    }

    listarLivros() {
        return this.livros;
    }

    exibirLivros() {
        console.log(`Livros cadastrados na Editora ${this.nome_editora}:`);
        this.livros.forEach(livro => {
            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano_publicacao})`);
        });
    }

}


