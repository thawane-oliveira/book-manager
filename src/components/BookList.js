import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";
import BookItem from './BookItem';

function BookList() {
  const { initialBooks } = useContext(BookContext);

  return (
    <div>
      <h1>Meus Livros</h1>
      <ul className="flex">
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            <>
              <BookItem key={book.id}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
              />
              <BookDetails
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                pages={book.volumeInfo.pageCount}
                publisher={book.volumeInfo.publisher}
              />

            </>
          ))}
      </ul>
    </div>
  );
}

export default BookList;

