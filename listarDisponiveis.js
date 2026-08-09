// listarDisponiveis.js
// RF04 - Listar livros disponíveis
// Esta função mostra apenas os livros que estão disponíveis para empréstimo.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista de livros do sistema.

export function listarDisponiveis() {
  // Filtra a lista e pega somente os livros com status de disponibilidade true.
  const livrosDisponiveis = dadosLivros.filter((livro) => livro.disponivel === true);

  console.log("\n===== LIVROS DISPONÍVEIS =====");

  if (livrosDisponiveis.length === 0) {
    // Se não houver nenhum disponível, informa o usuário.
    console.log("Nenhum livro disponível no momento.");
  } else {
    // Percorre a lista filtrada e mostra cada livro encontrado.
    livrosDisponiveis.forEach((livro, index) => {
      console.log(`\n${index + 1}. Título: ${livro.titulo.toUpperCase()}`);
      console.log(`   Autor: ${livro.autor}`);
      console.log(`   Categoria: ${livro.categoria}`);
      console.log(`   Páginas: ${livro.paginas}`);
      console.log(`   Disponível: Sim`);
    });
  }

  console.log("================================\n");
}
