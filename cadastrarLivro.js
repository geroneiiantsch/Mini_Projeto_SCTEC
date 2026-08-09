// cadastrarLivro.js
// RF05 - Cadastrar livro
// Esta função coleta as informações de um novo livro e adiciona ele ao sistema.
// O objetivo é ajudar o usuário a registrar um livro novo de forma simples.

import promptSyncFactory from "prompt-sync";
// Importa a biblioteca que permite receber dados digitados pelo usuário no terminal.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista que guarda todos os livros do sistema.

import { Livro } from "./Livro.js";
// Importa a classe que representa um livro.

const prompt = promptSyncFactory();
// Cria um objeto para ler entradas do usuário.

export function cadastrarLivro() {
  // Mostra o início do processo de cadastro.
  console.log("\n===== CADASTRAR NOVO LIVRO =====");

  // Pergunta os dados do livro ao usuário.
  const titulo = prompt("Título: ");
  const autor = prompt("Autor: ");
  const categoria = prompt("Categoria: ");
  const paginas = Number(prompt("Número de páginas: "));

  // Validação simples: verifica se o valor informado é realmente um número.
  if (isNaN(paginas)) {
    console.log("\nNúmero de páginas inválido! Cadastro cancelado.\n");
    return;
  }

  // Cria um novo objeto de livro, já marcado como disponível.
  const novoLivro = new Livro(titulo, autor, categoria, paginas, true);

  // Adiciona esse novo livro na lista do sistema.
  dadosLivros.push(novoLivro);

  // Informa ao usuário que o cadastro foi concluído com sucesso.
  console.log("\nLivro cadastrado com sucesso!");
  console.log(`Título: ${novoLivro.titulo}`);
  console.log("===================================\n");
}
