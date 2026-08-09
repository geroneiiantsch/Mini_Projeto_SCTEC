// realizarEmprestimo.js
// RF06 - Realizar empréstimo
// Esta função tenta emprestar um livro ao usuário.
// Se o livro existir e estiver disponível, ele passa a ser marcado como emprestado.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista de livros para alterar o status do livro escolhido.

export function realizarEmprestimo(titulo) {
  // Procura o livro pelo título, ignorando diferenças entre maiúsculas e minúsculas.
  const livro = dadosLivros.find(
    (livro) => livro.titulo.toUpperCase() === titulo.toUpperCase()
  );

  // O operador && significa que as duas condições precisam ser verdadeiras.
  // Ou seja, o livro precisa existir e estar disponível para poder ser emprestado.
  if (livro && livro.disponivel === true) {
    livro.disponivel = false;
    console.log("\nLivro emprestado com sucesso!\n");
  } else {
    console.log("\nLivro indisponível!\n");
  }
}
