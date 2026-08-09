// listarLivros.js
// RF02 - Listar livros
// Esta função mostra todos os livros cadastrados no sistema.
// Ela percorre a lista e exibe as informações de cada um.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista com os livros para exibir no console.

export function listarLivros() {
  console.log("\n===== LISTA DE LIVROS =====");

  // O forEach percorre a lista e mostra cada livro um por um.
  dadosLivros.forEach((livro, index) => {
    console.log(`\n${index + 1}. Título: ${livro.titulo.toUpperCase()}`);
    console.log(`   Autor: ${livro.autor}`);
    console.log(`   Categoria: ${livro.categoria}`);
    console.log(`   Páginas: ${livro.paginas}`);
    console.log(`   Disponível: ${livro.disponivel ? "Sim" : "Não"}`);
  });

  console.log("============================\n");
}
