// exibirEstatisticas.js
// RF08 - Exibir estatísticas
// Esta função calcula informações gerais sobre o acervo da biblioteca.
// Ela mostra quantos livros existem, quantos estão disponíveis e algumas médias.

import { dadosLivros } from "./dadosLivros.js";
// Importa a lista de livros para fazer os cálculos.

export function exibirEstatisticas() {
  // Conta quantos livros existem no sistema.
  const totalLivros = dadosLivros.length;

  // Filtra os livros disponíveis e conta quantos existem.
  const totalDisponiveis = dadosLivros.filter((livro) => livro.disponivel === true).length;
  // Filtra os livros emprestados e conta quantos existem.
  const totalIndisponiveis = dadosLivros.filter((livro) => livro.disponivel === false).length;

  // Soma o número de páginas de todos os livros.
  const totalPaginas = dadosLivros.reduce((acumulador, livro) => acumulador + livro.paginas, 0);

  // Calcula a média de páginas por livro.
  // Se não houver livros, evita erro de divisão por zero.
  const mediaPaginas = totalLivros > 0 ? (totalPaginas / totalLivros).toFixed(2) : 0;

  // Exibe os resultados para o usuário.
  console.log("\n===== ESTATÍSTICAS DO ACERVO =====");
  console.log(`Total de livros cadastrados: ${totalLivros}`);
  console.log(`Livros disponíveis: ${totalDisponiveis}`);
  console.log(`Livros indisponíveis: ${totalIndisponiveis}`);
  console.log(`Total de páginas (acervo completo): ${totalPaginas}`);
  console.log(`Média de páginas por livro: ${mediaPaginas}`);
  console.log("=====================================\n");
}
