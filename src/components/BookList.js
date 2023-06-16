import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";
import BookItem from './BookItem';
import InsertBook from "./InsertBook";

function BookList() {
  const { initialBooks } = useContext(BookContext);

  return (
    <div className="container h-screen w-screen flex items-center flex-col justify-around mx-auto">
      <h1 className="font-semibold text-3xl text-center text-red-900 font-serif">Meus Livros</h1>
      <InsertBook />
      <ul className="container overflow-auto h-4/5 w-4/5 flex flex-wrap items-center justify-between">
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            <li key={book.id} className="w-1/5">
              <BookItem
                id={book.id}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
              />
              <BookDetails
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BookList;

