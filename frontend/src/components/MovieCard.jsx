import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked")
    }
  return (
    <div className="movie-card">
      <div className="poster">
        <img src={movie.url} alt={movie.title} />
      </div>
      <div className="movie-overlay">
        <button className="favorite-button" onClick={onFavoriteClick}>
          🤍
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
