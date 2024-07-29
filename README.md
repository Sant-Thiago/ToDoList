# To-Do List

Este repositório contém uma aplicação de lista de tarefas (To-Do List) desenvolvida com React para o frontend e Python com Flask para o backend. A aplicação permite aos usuários adicionar, completar, excluir e editar tarefas. O ambiente de desenvolvimento é containerizado utilizando Docker e Docker Compose.

## Estrutura do Projeto

- **Frontend (React)**: Implementa a interface de usuário para a aplicação de lista de tarefas. A aplicação é servida por um contêiner Docker.

- **Backend (Python/Flask)**: Implementa uma API RESTful com endpoints para gerenciar tarefas. A API é conectada a um banco de dados SQLite, também containerizado.

## Funcionalidades Principais

1. **Gerenciamento de Tarefas**:
   - **Adicionar Tarefa**: Permite aos usuários adicionar uma nova tarefa à lista.
   - **Completar Tarefa**: Permite aos usuários marcar uma tarefa como concluída.
   - **Excluir Tarefa**: Permite aos usuários remover uma tarefa da lista.
   - **Editar Tarefa**: Permite aos usuários editar uma tarefa existente.

2. **Endpoints da API**:
   - **Obter Todas as Tarefas**:
     - `GET /get_all_tasks`: Retorna todas as tarefas.
   - **Criar Tarefa**:
     - `POST /create_task`: Cria uma nova tarefa.
   - **Atualizar Tarefa**:
     - `PUT /update_task`: Atualiza uma tarefa existente.
   - **Excluir Tarefa**:
     - `DELETE /delete_task`: Exclui uma tarefa.
   - **Obter Tarefas Concluídas**:
     - `GET /get_all_done_tasks`: Retorna todas as tarefas concluídas.
   - **Obter Tarefas Não Concluídas**:
     - `GET /get_all_not_done_tasks`: Retorna todas as tarefas não concluídas.
   - **Excluir Todas as Tarefas Concluídas**:
     - `DELETE /delete_all_done_tasks`: Exclui todas as tarefas concluídas.

## Como Executar o Projeto

1. **Configurar e Executar a Aplicação com Docker Compose**:
   - Certifique-se de ter Docker e Docker Compose instalados.
   - Navegue até o diretório do projeto e use o Docker Compose para iniciar os contêineres do frontend e do backend:
     ```bash
     docker-compose up -d
     ```
   - O frontend estará disponível em [http://localhost:3000](http://localhost:3000).
   - O backend estará disponível em [http://localhost:5000](http://localhost:5000) e é acessível pelo frontend.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Flask**: Framework Python para construção da API RESTful.
- **SQLite**: Banco de dados utilizado para armazenamento de dados.
- **Docker**: Plataforma para containerização dos serviços.
- **Docker Compose**: Ferramenta para definir e executar multi-contêineres Docker.

## Contribuição

Contribuições são bem-vindas! Para sugestões ou problemas encontrados, abra uma issue neste repositório.

---

Desenvolvido por [Sant-Thiago](https://github.com/Sant-Thiago/ToDoList)

