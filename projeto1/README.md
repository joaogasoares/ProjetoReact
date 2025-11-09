# 📚 Gerenciador de Séries - Fase 1

## Nome: `João Soares`

Este projeto é a entrega da Fase 1 do Gerenciador de Séries, desenvolvido utilizando **React** e **Vite**. O objetivo principal é estabelecer a estrutura de pastas, componentes essenciais (`NavBar`, `SerieForm`, `SerieList`) e implementar a navegação e as funcionalidades básicas de **CRUD** (Criação, Leitura, Atualização e Exclusão) de forma estática (em memória).

---

## 🚀 Como Executar o Projeto

Para rodar o projeto localmente, siga os seguintes passos no seu terminal (partindo da pasta raiz `projeto1`):

1.  **Navegue até a pasta raiz** do projeto:
    ```bash
    cd projeto1
    ```

2.  **Instale as dependências** necessárias:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento** do Vite:
    ```bash
    npm run dev
    ```

Após a execução, o projeto estará acessível no seu navegador, geralmente em **`http://localhost:5173/`**.

### Imagem/GIF do Resultado

![Gif mostrando o resultado esperado ao rodar o projeto](./docs/Tela%20esperada.gif)

---

### Descrição dos Componentes

| Componente | Localização | Descrição e Funcionalidade |
| :--- | :--- | :--- |
| **`NavBar`** | `./components/NavBar` | Componente de navegação principal. Posicionado de forma **absoluta** no topo esquerdo. Contém os links: *Página Principal*, *Sobre*, *Cadastrar Séries* e *Lista de Séries*. |
| **`SerieForm`** | `./components/SerieForm` | Formulário para **Criação** e **Atualização** de séries. Implementa a validação básica e *feedback* visual. |
| **`SerieList`** | `./components/SerieList` | Tabela para **Listagem** das séries. Contém os botões para **Excluir** e iniciar a **Edição** (`onEditStart`). |
| **`SeriesPage`** | `./pages/SeriesPage` | **Componente Controlador**. Gerencia o estado central das séries e implementa a lógica do CRUD estático (Add, Update, Delete). |

---

## 🧪 Testes

* **CRUD Completo:** É possível adicionar uma nova série, visualizá-la na lista, usar o botão "Editar" para preencher o formulário e salvar a edição, e excluir o item da lista.

![Gif mostrando os testes CRUD deste projeto](./docs/Testes.gif)

---

## 🛠️ Conclusão

Este projeto é apenas para fins demonstrativos e não contém mais alterações do que as necessárias para demostrar algumas funcionalidades úteis para o desenvolvimento de projetos em ReactJS.