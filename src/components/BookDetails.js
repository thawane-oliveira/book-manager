function BookDetails({ thumbnail, title, author }) {

  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default BookDetails;
