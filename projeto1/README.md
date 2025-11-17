# 🎬 Gerenciador de Séries (Series Manager)

## ✨ Descrição do Projeto

O **Gerenciador de Séries** é uma aplicação web desenvolvida em React que permite aos usuários catalogar, visualizar e gerenciar sua coleção de séries de televisão. O projeto foca em uma interface de usuário moderna e responsiva, utilizando um layout de cartões (cards) para exibir informações detalhadas de cada série, com funcionalidades completas de CRUD (Criação, Leitura, Atualização e Deleção).



---

## 🚀 Funcionalidades Principais

| Ícone | Funcionalidade | Descrição |
| :---: | :--- | :--- |
| **🏠** | **Visualização em Cartões** | Exibe a lista de séries cadastradas em um grid responsivo (3 colunas em desktop). |
| **✏️** | **Edição** | Permite carregar e atualizar os dados de uma série existente. |
| **🗑️** | **Exclusão** | Permite remover uma série da lista. |
| **➕** | **Cadastro Completo** | Formulário robusto com validação para inclusão de novas séries. |

### Campos do Cadastro:

Todos os campos são obrigatórios para o cadastro de uma nova série:

* Título
* Número de Temporadas
* Data de Lançamento da Temporada
* Diretor
* Produtora
* Categoria
* Data em que assistiu

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** ReactJS (com Hooks: `useState`, `useEffect`, `useNavigate`)
* **Roteamento:** React Router DOM
* **Comunicação API:** Axios
* **Estilização:** CSS puro (Flexbox e Grid)

---

## 💻 Como Executar o Projeto (Setup)

Siga os passos abaixo para instalar e rodar a aplicação em sua máquina local.

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm ou yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [LINK-DO-SEU-REPOSITÓRIO]
    cd nome-do-projeto
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie a aplicação:**
    ```bash
    npm start
    # ou
    yarn start
    ```

A aplicação será aberta automaticamente no seu navegador em `http://localhost:3000`.

---

## 💡 Status do Desenvolvimento

Este projeto está atualmente na fase de **Desenvolvimento Frontend e Transição para Backend**.

* O frontend está completo, utilizando um layout moderno de cartões.
* As rotas de navegação e as operações CRUD (com dados mockados) estão funcionais.
* A configuração do Axios para o endpoint `http://localhost:5000` está pronta para a integração com a API de backend.

### Próximos Passos (Próximas Fases)

* [ ] Integrar o frontend ao backend real usando o Axios para persistência de dados.
* [ ] Refinar a experiência de usuário e responsividade em telas ultra-pequenas.
* [ ] Implementar testes unitários para os componentes.

---

## 📄 Licença

Este projeto está sob a licença [Escolha uma licença, ex: MIT].