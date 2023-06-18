import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import { booksMock } from './mocks/Books.mock';
import userEvent from '@testing-library/user-event';

describe('Testes dos componentes da aplicação', () => {
  it('Verifica se aparece o componente Loading ao entrar na tela inicial', () => {
    render(<App />);

    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });

    expect(loading).toBeVisible();
  });

  it('Verifica se após uma falha na requisição à API, é possível visualizar a mensagem de erro pelo componente FailedFetch', async () => {

    jest.spyOn(global, 'fetch');
    global.fetch.mockRejectedValue('TypeError: Failed to fetch');
    render(<App />);


    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const h2Text = 'Parece que algo deu errado. Por favor, recarregue a página e tente novamente.';
    const firstBookName = await screen.findByRole('heading', { name: h2Text, level: 2 });
    expect(firstBookName).toBeVisible();

    const altErrorImageText = 'Círculo vermelho simbolizando que algo deu errado';
    const errorImage = await screen.findByAltText(altErrorImageText);
    expect(errorImage).toBeVisible();
  });

  it('Verifica se após a requisição à API, é possível visualizar livros renderizados pelo componente BookItem', async () => {

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(booksMock) });

    render(<App />);


    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const firstBookName = await screen.findByRole('heading', { name: /futuro presente/i, level: 2 });
    expect(firstBookName).toBeVisible();

    const secondBookName = await screen.findByRole('heading', { name: /tecnologia para a indústria/i, level: 2 });
    expect(secondBookName).toBeVisible();
  });

  it('Verifica se é possível remover um livro da lista por meio do botão "remover"', async () => {
    const user = userEvent.setup();
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(booksMock) });

    render(<App />);

    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const removeButton = await screen.findAllByRole('button', { name: /remover/i });
    await user.click(removeButton[0]);

    const allBooks = await screen.findAllByRole('heading', { level: 2 })
    expect(allBooks[0]).toHaveTextContent('Tecnologia para a indústria')
  });

  it('Verifica se há um botão de "detalhes", que abre um modal com a descrição do livro pelo componente BookDetails', async () => {
    const user = userEvent.setup();
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(booksMock) });

    render(<App />);

    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const detailButton = await screen.findAllByRole('button', { name: /detalhes/i });
    await user.click(detailButton[0]);

    const bookDetails = await screen.findByRole('heading', { name: /detalhes do livro/i, level: 1 });
    expect(bookDetails).toBeVisible();

    const hideDetailsButton = await screen.findByRole('button', { name: /esconder detalhes/i });
    await user.click(hideDetailsButton);
    expect(bookDetails).not.toBeVisible();
  });

  it('Verifica se é possível adicionar um novo livro à lista', async () => {
    const user = userEvent.setup();
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(booksMock) });

    render(<App />);

    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const bookInput = await screen.findByPlaceholderText('A vaca voadora');
    const authorInput = await screen.findByPlaceholderText('Edy Lima');
    const imgInput = await screen.findByPlaceholderText('https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg');
    const addBookButton = await screen.findByRole('button', { name: /enviar dados/i });

    await user.type(bookInput, 'GioGio');
    await user.type(authorInput, 'Hirohiko Araki');
    await user.type(imgInput, 'urlbugada');
    await user.click(addBookButton);
    
    const newBook = await screen.findByRole('heading', { name: /giogio/i, level: 2 });
    expect(newBook).toBeVisible();
    
    const placeholderImg = screen.getByAltText('GioGio');
    fireEvent.error(placeholderImg);

    expect(placeholderImg).toHaveAttribute('src', 'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png');
  });

  it('Verifica se não é permitido adicionar um novo livro à lista, caso nome ou autor não sejam preenchidos', async () => {
    const user = userEvent.setup();
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(booksMock) });

    render(<App />);

    const loading = screen.getByRole('heading', { name: /carregando.../i, level: 1 });
    expect(loading).toBeVisible();
    await waitForElementToBeRemoved(loading);

    const authorInput = await screen.findByPlaceholderText('Edy Lima');
    expect(authorInput.value).toBe('');
    await user.type(authorInput, 'Hirohiko Araki');
    expect(authorInput.value).toBe('Hirohiko Araki')

    const addBookButton = screen.getByRole('button', { name: /enviar dados/i });
    await user.click(addBookButton);

    const error = await screen.findByText('Parece que alguns dados não estão completos. Tente novamente.');
    expect(error).toBeVisible();
  });
});
