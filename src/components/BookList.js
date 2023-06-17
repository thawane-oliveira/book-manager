import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookDetails from "./BookDetails";
import BookItem from './BookItem';
import InsertBook from "./InsertBook";
import Loading from "./Loading";

function BookList() {
  const { initialBooks, loading } = useContext(BookContext);

  return (
    <>
      {loading ? <Loading /> : (
        <div className="container min-h-screen w-screen flex items-center flex-col justify-around mx-auto">
          <h1 className="font-semibold text-3xl text-center text-red-900 font-serif">Meus Livros</h1>
          <InsertBook />
          <ul className="container w-full flex flex-wrap items-center justify-around mt-[4%]">
            {initialBooks
              .filter((book) => book.volumeInfo && book.volumeInfo.imageLinks)
              .map(({id, volumeInfo}) => (
                <li key={id} className="w-full xs:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-[3%]">
                  <BookItem
                    id={id}
                    thumbnail={volumeInfo.imageLinks.thumbnail}
                    title={volumeInfo.title}
                    authors={volumeInfo.authors}
                  />
                  <BookDetails
                    id={id}
                    thumbnail={volumeInfo.imageLinks.thumbnail}
                    title={volumeInfo.title}
                    authors={volumeInfo.authors}
                    description={volumeInfo.description}
                  />
                </li>
              ))}
          </ul>
        </div>
      )
      }
    </>
  );
}

export default BookList;

