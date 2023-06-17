import { useContext } from "react";
import BookContext from "../context/BookContext";

function BookItem({ id, thumbnail, title, authors = []}) {

  const { initialBooks, setInitialBooks, placeholderImg } = useContext(BookContext);

  const removeBook = () => {
    const filteredBooks = initialBooks.filter((book) => book.id !== id);
    setInitialBooks(filteredBooks);
  }

  const onImageError = ({target}) => {
    target.src = placeholderImg;
  }

  return (
    <div className="flex justify-around items-center flex-col h-[400px]">
      <img src={thumbnail} alt={title} onError={onImageError} className="max-w-4/5 mx-auto max-h-56" />
      <h2 className="text-center font-extrabold text-red-900 font-serif text-md">{title}</h2>
      {authors.map((author) => <p key={`${id}-${author}`} className="text-center font-semibold font-serif text-md">{author}</p>)}
      
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

export default BookItem;