// realizarDevolucao.js
// RF07 - Realizar devolução
// Esta função registra a devolução de um livro.
// Se o livro existir, ele volta a ficar disponível para empréstimo.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista de livros para atualizar o status do livro devolvido.

export function realizarDevolucao(titulo) {
  // Busca o livro pelo título informado.
  const livro = dadosLivros.find(
    (livro) => livro.titulo.toUpperCase() === titulo.toUpperCase()
  );

  if (livro) {
    // Marca o livro como disponível novamente.
    livro.disponivel = true;
    console.log("\nLivro devolvido com sucesso!\n");
  } else {
    // Se não encontrar o livro, informa ao usuário.
    console.log("\nLivro não encontrado!\n");
  }
}
