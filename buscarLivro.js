// buscarLivro.js
// RF03 - Buscar livro
// Esta função procura um livro pelo título e mostra suas informações no console.
// Ela foi escrita de forma simples para facilitar o entendimento de quem está começando.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista de livros que já existe no sistema.

export function buscarLivro(titulo) {
  // A função recebe o título digitado pelo usuário.
  // O método find percorre a lista de livros e procura o primeiro que tenha o mesmo título.
  // A comparação é feita sem diferenciar letras maiúsculas e minúsculas.
  const livroEncontrado = dadosLivros.find(
    (livro) => livro.titulo.toUpperCase() === titulo.toUpperCase()
  );

  if (livroEncontrado) {
    // Se o livro foi encontrado, mostramos os dados dele na tela.
    console.log("\n===== LIVRO ENCONTRADO =====");
    console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`);
    console.log(`Autor: ${livroEncontrado.autor}`);
    console.log(`Categoria: ${livroEncontrado.categoria}`);
    console.log(`Páginas: ${livroEncontrado.paginas}`);
    console.log(`Disponível: ${livroEncontrado.disponivel ? "Sim" : "Não"}`);
    console.log("=============================\n");
  } else {
    // Se nenhum livro combinar com o título digitado, avisamos o usuário.
    console.log("\nLivro não encontrado!\n");
  }
}
