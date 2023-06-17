import { useState } from "react";

function BookDetails({ description, thumbnail, title, author }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      {!showDetail &&
        <div
          className="flex flex-col justify-center items-center fixed inset-0 
          z-50 outline-none focus:outline-none w-100 backdrop-blur-md"
        >
          <div className="w-4/5 bg-amber-50 overflow-auto h-full px-[1%]
          flex flex-col items-center justify-between py-[2%] xs:h-4/5 xs:w-3/5
          rounded-lg"
          >
            <h1 className="text-center font-extrabold text-red-900 font-serif text-lg">
              Detalhes do livro
            </h1>
            <img
              src={thumbnail}
              alt={title}
            />
            <h2 className="text-center font-extrabold font-serif text-lg">
              {title}
              </h2>
            <p className="text-center font-semibold font-serif text-md">
              {author}
              </p>
            <p className="text-center font-normal font-serif text-md">
              {description}
              </p>
            <button
              onClick={seeBookDetails}
              type="button"
              className="text-center font-semibold font-serif text-md rounded-md bg-green-200 w-1/2 shadow-neutral-200 shadow-md"
            >
              Esconder detalhes
            </button>
          </div>
        </div>
      }
      <button
        onClick={seeBookDetails}
        type="button"
        className="text-center font-semibold font-serif text-md rounded-md bg-green-200 w-1/2 shadow-neutral-200 shadow-md"
      >
        Detalhes
      </button>
    </div>
  );
}

export default BookDetails;
