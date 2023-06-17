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
    setInitialBooks([...initialBooks, newBook]);
    setBookName('');
    setAuthorName('');
    setBookImage('');
  };

  return (
    <form className="mt-[3%] w-4/5 flex flex-col justify-around items-center">
      <label
        htmlFor="bookName"
      >
        Digite o nome do livro
      </label>
      <input
        id="bookName"
        placeholder="A vaca voadora"
        onChange={({ target }) => setBookName(target.value)}
        value={bookName}
      />

      <label
        htmlFor="authorName"
      >
        Digite o nome do autor
      </label>
      <input
        id="authorName"
        placeholder="Edy Lima"
        onChange={({ target }) => setAuthorName(target.value)}
        value={authorName}
      />

      <label
        htmlFor="bookImage"
      >
        URL da capa do livro
      </label>
      <input
        id="bookImage"
        placeholder="https://yareyare.daze"
        onChange={({ target }) => setBookImage(target.value)}
        value={bookImage}
      />
      <br />
      <button
        onClick={setBookInfo}
        type="button"
        className="text-center font-semibold font-serif text-md rounded-md bg-amber-100 w-2/12"
      >
        Enviar dados
      </button>
    </form>
  );
}

export default InsertBook;

