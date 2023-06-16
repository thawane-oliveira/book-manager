
function BookDetails({ thumbnail, title, author }) {

  return (
    <div>
      <div>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default BookDetails;