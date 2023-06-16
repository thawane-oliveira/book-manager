import { useState } from "react";

function BookDetails({ description }) {
  const [showDetail, setShowDetail] = useState(true);

  const seeBookDetails = () => {
    setShowDetail(!showDetail);
    console.log(description)
  };

  return (
    <div>
      <h1>
        Detalhes do Livro
      </h1>
      <div hidden={showDetail}>
        <p>{description}</p>
      </div>
      <button onClick={seeBookDetails}>{showDetail ? 'Ver mais detalhes' : 'Esconder detalhes'}</button>
    </div>
  );
}

export default BookDetails;
