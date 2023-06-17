import { useState } from "react";

function BookDetails({ description, thumbnail, title, author }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="flex justify-center">
      <div hidden={showDetail}>
        <h1>Detalhes do livro</h1>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <button
        onClick={seeBookDetails}
        type="button"
        className="text-center font-semibold font-serif text-md rounded-md bg-green-200 w-1/2 shadow-neutral-200 shadow-md"
      >
        {showDetail ? 'Detalhes' : 'Esconder detalhes'}
      </button>
    </div>
  );
}

export default BookDetails;
