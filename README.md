# Book Manager

A aplicação foi construída utilizando ReactJS, Context API para gerenciamento de estado, TailwindCSS para estilização e RTL para cobertura de testes.

## Funcionalidades

- Exibe uma lista de 10 livros obtidos através de uma requisição à API do Google Books.
- Caso ocorra um erro durante a requisição, é exibido um aviso para recarregar a página.
- Permite adicionar um novo livro à lista através de um formulário no topo da página. Basta fornecer o título do livro, o nome do autor e opcionalmente uma URL de imagem para a capa. Caso nenhuma URL seja fornecida, será utilizada uma imagem padrão.
- Cada livro exibido possui dois botões:
  - Remover: exclui o livro da lista.
  - Ver detalhes: exibe uma sinopse do livro em um modal.
<img src="https://github.com/thawane-oliveira/book-manager/blob/main/src/images/book-list.gif" width="50%" alt="Funcionamento da aplicação">

## Como executar o projeto

Siga as instruções abaixo para executar o projeto em seu ambiente local:

1. Clone este repositório.
2. Abra o terminal e navegue até a pasta `book-manager`.
3. Execute o comando `npm install` ou `npm i` para instalar as dependências.
4. Após a instalação, digite `npm start` para iniciar a aplicação.
5. Acesse a aplicação no seu navegador através do endereço `http://localhost:3000`.

## Testes

Para verificar a cobertura de testes da aplicação, execute o seguinte comando no terminal:

```
npm run test-coverage
```

Isso executará os testes e exibirá a cobertura dos mesmos em relação a aplicação no terminal.

