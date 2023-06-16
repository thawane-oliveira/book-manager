import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { initialBooks } = useContext(BookContext);

  return (
    <div>
      <h1>Meus Livros</h1>
      <ul>
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            < BookDetails key={book.id}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
            />
          ))}
      </ul>
    </div>
  );
}

export default BookList;

