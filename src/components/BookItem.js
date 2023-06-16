import { useContext } from "react";
import BookContext from "../context/BookContext";

function BookDetails({ id, thumbnail, title, author }) {

  const { initialBooks, setInitialBooks } = useContext(BookContext);

  const removeBook = () => {
    const filteredBooks = initialBooks.filter((book) => book.id !== id);
    setInitialBooks(filteredBooks);
  }

  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={removeBook}>Remover da minha lista</button>
    </div>
  );
}

export default BookDetails;