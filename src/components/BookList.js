import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";


function BookList() {
  const { initialBooks } = useContext(BookContext);
  // const [showDetail, setShowDetail] = useState(false);

  // const seeBookDetails = () => {
  //   setShowDetail(!showDetail);
  // };

  return (
    <div>
      <h1>Meus Livros</h1>
      <ul className="flex">
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            <li key={book.id}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
              
              <BookDetails description={book.volumeInfo.description} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BookList;

