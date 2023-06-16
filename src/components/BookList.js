import React, { useContext, useEffect } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";
import BookItem from './BookItem';
import InsertBook from "./InsertBook";

function BookList() {
  const { initialBooks } = useContext(BookContext);

  return (
    <div>
      <h1>Meus Livros</h1>
      <InsertBook />
      <ul className="flex">
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            <li key={book.id}>
              <BookItem
                id={book.id}
                key={book.id}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
              />
              <BookDetails
                key={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                pages={book.volumeInfo.pageCount}
                publisher={book.volumeInfo.publisher}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BookList;

