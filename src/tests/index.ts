/*
Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco
será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser
NoSQL ou SQL.

Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades
de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.

Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e,
caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Edi-
tora e uma Editora pode ter uma lista de livros


Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código
esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cená-
rio, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.
*/

import { Editora } from "./editora";
import { Livro } from "./livro";


const editoraA = new Editora("Rocco");
const editoraB = new Editora("Intríseca")
const editoraC = new Editora("Companhia das Letras")

const livro1 = new Livro("Jogos Vorazes", "Suzane Collins", "8579800242", 2012, editoraA);
const livro2 = new Livro("Coraline", "Neil Gaiman", "9788532526762", 2003, editoraA);
const livro3 = new Livro("O Livro das Coisas Perdidas", "John Connolly", "9788532517203", 2006, editoraA);

const livro4 = new Livro("Percy Jackson e os Olimpianos: O Ladrão de Raios", "Rick Riordan", "9788598078355", 2008, editoraB);
const livro5 = new Livro("As Provações de Apolo: O Oráculo Oculto", "Rick Riordan", "9788551001645", 2016, editoraB);
const livro6 = new Livro("A Casa da Madrinha", "Lygia Bojunga", "9788532529541", 1978, editoraB);

const livro7 = new Livro("A Rainha Vermelha", "Victoria Aveyard", "9788565765695", 2015, editoraC);
const livro8 = new Livro("Corte de Espinhos e Rosas", "Sarah J. Maas", "9788555340245", 2015, editoraC);
const livro9 = new Livro("A Rebelde do Deserto", "Alwyn Hamilton", "9788555340085", 2016, editoraC);

editoraA.adicionarLivro(livro1)
editoraA.adicionarLivro(livro2)
editoraA.adicionarLivro(livro3)

editoraB.adicionarLivro(livro4)
editoraB.adicionarLivro(livro5)
editoraB.adicionarLivro(livro6)

editoraC.adicionarLivro(livro7)
editoraC.adicionarLivro(livro8)
editoraC.adicionarLivro(livro9)

editoraA.exibirLivros()
editoraB.exibirLivros()
editoraC.exibirLivros()