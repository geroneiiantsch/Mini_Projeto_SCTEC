// index.js
// RF01 - Menu do sistema
// Este é o ponto de entrada da aplicação.
// Aqui o sistema mostra um menu no console, recebe a opção escolhida pelo usuário
// e chama a função correta para cada ação. O menu continua aparecendo até a pessoa
// decidir sair escolhendo a opção 0.

import promptSyncFactory from "prompt-sync";
// Importa a biblioteca que permite ler o que o usuário digita no terminal.

import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { exibirEstatisticas } from "./exibirEstatisticas.js";
// Importa as funções do sistema que serão executadas conforme a opção escolhida.

const prompt = promptSyncFactory();
// Cria um objeto que vai ler entradas do usuário pelo terminal.

function exibirMenu() {
  // Mostra as opções disponíveis para o usuário.
  console.log("================================");
  console.log("SISTEMA DE BIBLIOTECA");
  console.log("================================");
  console.log("1 - Listar livros");
  console.log("2 - Buscar livro");
  console.log("3 - Listar livros disponíveis");
  console.log("4 - Cadastrar livro");
  console.log("5 - Realizar empréstimo");
  console.log("6 - Realizar devolução");
  console.log("7 - Exibir estatísticas");
  console.log("0 - Sair");
}

// Estrutura de repetição do-while: o menu é mostrado pelo menos uma vez
// e continua aparecendo até que o usuário escolha a opção "0".
let opcao;

do {
  exibirMenu();
  // Pergunta ao usuário qual ação deseja realizar.
  opcao = prompt("\nEscolha uma opção: ");

  // switch-case dirige o fluxo do programa dependendo da opção escolhida.
  switch (opcao) {
    case "1":
      // Chama a função que mostra todos os livros cadastrados.
      listarLivros();
      break;

    case "2": {
      // Pede o título do livro e envia para a função de busca.
      const tituloBusca = prompt("Digite o título do livro: ");
      buscarLivro(tituloBusca);
      break;
    }

    case "3":
      // Chama a função que mostra apenas os livros disponíveis.
      listarDisponiveis();
      break;

    case "4":
      // Chama a função que cadastra um novo livro no sistema.
      cadastrarLivro();
      break;

    case "5": {
      // Pede o título do livro para realizar o empréstimo.
      const tituloEmprestimo = prompt("Digite o título do livro para empréstimo: ");
      realizarEmprestimo(tituloEmprestimo);
      break;
    }

    case "6": {
      // Pede o título do livro para registrar a devolução.
      const tituloDevolucao = prompt("Digite o título do livro para devolução: ");
      realizarDevolucao(tituloDevolucao);
      break;
    }

    case "7":
      // Chama a função que mostra estatísticas da biblioteca.
      exibirEstatisticas();
      break;

    case "0":
      // Fecha o sistema com uma mensagem amigável.
      console.log("\nEncerrando o sistema. Até logo!\n");
      break;

    default:
      // Se a opção não existir, mostra uma mensagem de erro.
      console.log("\nOpção inválida! Tente novamente.\n");
  }
} while (opcao !== "0");
