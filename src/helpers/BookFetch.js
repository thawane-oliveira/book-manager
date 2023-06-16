const searchBooks = async () => {
  try {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=tecnologia';
    const response = await fetch(url);

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Erro ao buscar seus livros:', error);
    return [];
  }
};

export default searchBooks;
