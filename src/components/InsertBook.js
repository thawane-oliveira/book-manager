import { useContext, useEffect, useState } from "react";
import BookContext from "../context/BookContext";

function InsertBook() {
  const { initialBooks, setInitialBooks } = useContext(BookContext);

  const [error, setError] = useState(false);
  const [input, setInput] = useState({ bookName: '', authorName: '', bookImage: '' });

  const setBookInfo = (e) => {
    e.preventDefault();
    const { bookName, authorName, bookImage } = input;
    if (!bookName.length || !authorName.length) {
      setError(true);
    }
    else {
      e.preventDefault();

      const newBook = {
        id: Math.random(),
        volumeInfo: {
          title: bookName, authors: [authorName], imageLinks: { thumbnail: bookImage }
        }
      };
      setInitialBooks([...initialBooks, newBook]);
      setInput({ bookName: '', authorName: '', bookImage: '' });
      setError(false);
    }
  };

  const handleChange = ({ name, value }) => {
    setInput({ ...input, [name]: value })
  }

  useEffect(() => {
    const { bookName, authorName } = input;
    if (bookName.length && authorName.length) {
      setError(false);
    }
  }, [input]);

  return (
    <form className="mt-[3%] w-4/5 flex flex-col justify-around items-center">
      <label
        htmlFor="bookName"
      >
       Digite o nome do livro * 
      </label>
      <input
        id="bookName"
        name="bookName"
        placeholder="A vaca voadora"
        required
        onChange={({ target }) => handleChange(target)}
        value={input.bookName}
      />

      <label
        htmlFor="authorName"
      >
       Digite o nome do autor * 
      </label>
      <input
        id="authorName"
        name="authorName"
        placeholder="Edy Lima"
        required
        onChange={({ target }) => handleChange(target)}
        value={input.authorName}
      />

      <label
        htmlFor="bookImage"
      >
        URL da capa do livro
      </label>
      <input
        id="bookImage"
        name="bookImage"
        placeholder="https://editoraflutuante.com.br/wp-content/uploads/2018/08/Quarta-Capa-Frente-1.jpg"
        onChange={({ target }) => handleChange(target)}
        value={input.bookImage}
      />
      <br />
      <button
        onClick={(e => setBookInfo(e))}
        type="submit"
        className="w-4/12 text-center font-semibold font-serif text-md rounded-md bg-amber-100 sm:w-3/12"
      >
        Enviar dados
      </button>
      {error &&
        <p>Parece que alguns dados não estão completos. Tente novamente.</p>}
    </form>
  );
}

export default InsertBook;

