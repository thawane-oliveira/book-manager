const searchBooks = async () => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=colecao+vagalume';

  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};

export default searchBooks;
