# To-Do List

Este repositório contém um exemplo de aplicação de lista de tarefas (To-Do List) desenvolvida em React. A aplicação permite aos usuários adicionar, completar e excluir tarefas. A aplicação é containerizada utilizando Docker.

## Estrutura do Projeto

- **Frontend (React)**: Implementa a interface do usuário para a aplicação de lista de tarefas. O frontend é servido por um contêiner Docker.

## Funcionalidades Principais

1. **Gerenciamento de Tarefas**:

   - **Adicionar Tarefa**: Permite aos usuários adicionar uma nova tarefa à lista.
   - **Completar Tarefa**: Permite aos usuários marcar uma tarefa como concluída.
   - **Excluir Tarefa**: Permite aos usuários remover uma tarefa da lista.
   - **Editar Tarefa**: Permite aos usuários editar uma tarefa existente.

## Como Executar o Projeto

1. **Configurar e Executar a Aplicação**:

   - Certifique-se de ter Docker instalado.
   - Navegue até o diretório do projeto e crie a imagem Docker para a aplicação.
     ```bash
     docker build -t todo-list-app .
     ```
   - Execute o contêiner Docker.
     ```bash
     docker run -p 3000:80 todo-list-app
     ```
   - A aplicação estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Docker**: Plataforma para containerização da aplicação.

## Contribuição

Contribuições são bem-vindas! Para sugestões ou problemas encontrados, abra uma issue neste repositório.

---

Desenvolvido por [Sant-Thiago](https://github.com/Sant-Thiago/ToDoList)
