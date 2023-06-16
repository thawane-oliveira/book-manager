import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";
import BookItem from './BookItem';
import InsertBook from "./InsertBook";

function BookList() {
  const { initialBooks } = useContext(BookContext);

  return (
    <div className="container min-h-screen w-screen flex items-center flex-col justify-around mx-auto">
      <h1 className="font-semibold text-3xl text-center text-red-900 font-serif">Meus Livros</h1>
      <InsertBook />
      <ul className="container w-full flex flex-wrap items-center justify-around mt-[4%]">
        {initialBooks
          .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
          .map((book) => (
            <li key={book.id} className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-[3%]">
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

