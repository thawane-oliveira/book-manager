import { useContext } from "react";
import BookContext from "../context/BookContext";

function BookDetails({ id, thumbnail, title, authors }) {

  const { initialBooks, setInitialBooks } = useContext(BookContext);

  const removeBook = () => {
    const filteredBooks = initialBooks.filter((book) => book.id !== id);
    setInitialBooks(filteredBooks);
  }

  return (
    <div className="flex justify-around items-center flex-col h-[400px]">
      <img src={thumbnail} alt={title} className="max-w-4/5 mx-auto" />
      <h2 className="text-center font-extrabold text-red-900 font-serif text-md">{title}</h2>
      {authors.map((author) => <p className="text-center font-semibold font-serif text-md">{author}</p>)}
      
      <button
        className="text-center font-semibold font-serif text-md rounded-md bg-red-200 w-1/2 shadow-neutral-200 shadow-md"
        type="button"
        onClick={removeBook}
      >
        Remover
      </button>
    </div>
  );
}

export default BookDetails;