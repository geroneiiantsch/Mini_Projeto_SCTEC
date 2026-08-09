

# Controle para Biblioteca em JS

## Sobre o projeto

Sistema de gerenciamento de acervo para uma biblioteca, desenvolvido em JavaScript puro (Node.js), executado via terminal. Permite cadastrar e consultar livros, controlar a disponibilidade, realizar empréstimos e devoluções, e gerar estatísticas do acervo.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Lógica de programação e tipos de dados
- Estruturas condicionais (if, operadores lógicos)
- Estruturas de repetição (do-while, switch-case)
- Funções e arrow functions
- Arrays e métodos de array (forEach, filter, find, reduce)
- Objetos e uso do `this`
- Classes (POO) e constructor
- Módulos ES (`import` / `export`)
- Versionamento com Git e GitHub

## Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório e acesse a pasta do projeto:
   ```bash
   git clone <link-do-repositorio>
   cd biblioteca-js
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   node index.js
   ```
   ou
   ```bash
   npm start
   ```
5. Utilize o menu exibido no terminal para navegar pelas opções (digite o número da opção e pressione Enter). Digite `0` para sair.

## Estrutura do projeto

```
biblioteca-js/
│
├── index.js                 # Menu principal do sistema (RF01)
├── listarLivros.js          # RF02 - Listar livros
├── buscarLivro.js           # RF03 - Buscar livro
├── listarDisponiveis.js     # RF04 - Listar livros disponíveis
├── cadastrarLivro.js        # RF05 - Cadastrar livro
├── realizarEmprestimo.js    # RF06 - Realizar empréstimo
├── realizarDevolucao.js     # RF07 - Realizar devolução
├── exibirEstatisticas.js    # RF08 - Exibir estatísticas
├── Livro.js                 # RF09 - Classe Livro
├── dadosLivros.js           # RF10 - Array inicial de livros (módulo)
├── package.json
└── README.md
```

## Vídeo de demonstração

[Link do vídeo aqui]
