import { useState } from "react";

function BookDetails({ description, thumbnail, title, author }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
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
      >
        {showDetail ? 'Ver mais detalhes' : 'Esconder detalhes'}
      </button>
    </div>
  );
}

export default BookDetails;
