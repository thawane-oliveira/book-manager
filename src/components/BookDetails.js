import { useState } from "react";

function BookDetails({ description, thumbnail, title, author }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="flex justify-center items-center">
      {!showDetail &&
        <div
          className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto
         fixed inset-0 z-50 outline-none focus:outline-none w-100 backdrop-blur-md"
        >
          <div className="w-3/4  bg-amber-50">
            <h1>Detalhes do livro</h1>
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{description}</p>
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
