// dadosLivros.js
// RF10 - Utilizar módulo
// Este arquivo guarda a lista inicial de livros do sistema.
// Ele funciona como uma espécie de banco de dados simples, com livros já cadastrados.

import { Livro } from "./Livro.js";
// Importa a classe Livro para criar cada item da lista.

export const dadosLivros = [
  // Cada livro é criado como um objeto com título, autor, categoria, páginas e status de disponibilidade.
  new Livro("JavaScript para Iniciantes", "Ana Souza", "Programação", 280, true),
  new Livro("CSS Moderno", "Carlos Lima", "Web Design", 190, false),
  new Livro("HTML Essencial", "Fernanda Rocha", "Programação", 250, true),
  new Livro("Lógica de Programação", "Marcos Silva", "Programação", 320, true),
  new Livro("Banco de Dados", "Juliana Costa", "Banco de Dados", 410, false),
  new Livro("Git e GitHub", "Lucas Pereira", "Ferramentas", 170, true),
  new Livro("Node.js na Prática", "Eduardo Martins", "Programação", 360, true),
  new Livro("UX Design", "Patrícia Alves", "Design", 220, false),
  new Livro("Angular Completo", "Roberto Santos", "Programação", 430, true),
  new Livro("React para Web", "Camila Ferreira", "Programação", 390, true),
];
