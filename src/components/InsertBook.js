import { useContext } from "react";
import BookContext from "../context/BookContext";

function InsertBook() {
  const { bookName, setBookName,
    bookImage, setBookImage,
    authorName, setAuthorName,
    initialBooks, setInitialBooks } = useContext(BookContext);

  const setBookInfo = () => {
    const newBook = {
      id: Math.random(),
      volumeInfo: {
        title: bookName,
        authors: [
          authorName
        ],
        imageLinks: {
          thumbnail: bookImage
        }
      }
    };
    setInitialBooks([...initialBooks, newBook])
  };

  return (
    <form>
      <label htmlFor="bookName">Digite o nome do livro</label>
      <input
        id="bookName"
        placeholder="A vaca voadora"
        onChange={({ target }) => setBookName(target.value)}
        value={bookName}
      />

      <label htmlFor="authorName">Digite o nome do autor</label>
      <input
        id="authorName"
        placeholder="Edy Lima"
        onChange={({ target }) => setAuthorName(target.value)}
        value={authorName}
      />

      <label htmlFor="bookImage">Insira a URL da capa do livro</label>
      <input
        id="bookImage"
        placeholder="https://yareyare.daze"
        onChange={({ target }) => setBookImage(target.value)}
        value={bookImage}
      />

      <button onClick={setBookInfo} type="button">Enviar dados</button>
    </form>
  );
}

export default InsertBook;

