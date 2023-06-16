import { useState } from "react";

function BookDetails({ description, thumbnail, title, author, pages, publisher }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <h1>
        Detalhes do Livro
      </h1>
      <div hidden={showDetail}>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{author}</p>
        <p>Quantidade de páginas: {pages}</p>
        <p>Editora: {publisher}</p>
        <p>{description}</p>
      </div>
      <button onClick={seeBookDetails}>{showDetail ? 'Ver mais detalhes' : 'Esconder detalhes'}</button>
    </div>
  );
}

export default BookDetails;
