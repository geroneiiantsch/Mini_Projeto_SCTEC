// Livro.js
// RF09 - Criar uma classe
// Esta classe representa um livro da biblioteca.
// Ela organiza os dados do livro em um único objeto para facilitar o uso no sistema.

export class Livro {
  constructor(titulo, autor, categoria, paginas, disponivel = true) {
    // O título é salvo em letras maiúsculas para manter um padrão no sistema.
    this.titulo = titulo.toUpperCase();
    this.autor = autor;
    this.categoria = categoria;
    this.paginas = paginas;
    this.disponivel = disponivel; // true = disponível para empréstimo | false = emprestado
  }
}