import "../css/MovieCard.css"
import { useState, useEffect } from 'react';

function MovieCard({movie}) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if movie is in favorites when component mounts
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some(fav => fav.id === movie.id));
    }, [movie.id]);

    function onFavoriteClick() {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        if (isFavorite) {
            // Remove from favorites
            const newFavorites = favorites.filter(fav => fav.id !== movie.id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            // Dispatch storage event for other components
            window.dispatchEvent(new Event('storage'));
            setIsFavorite(false);
        } else {
            // Add to favorites
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            // Dispatch storage event for other components
            window.dispatchEvent(new Event('storage'));
            setIsFavorite(true);
        }
    }

    return (
        <div className="movie-card">
            <div className="poster">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title}
                    loading="lazy"
                />
                <button 
                    className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`} 
                    onClick={onFavoriteClick}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    ❤️
                </button>
                <div className="movie-details">
                    <div className="movie-rating">
                        <span>⭐</span>
                        <span>{movie.vote_average?.toFixed(1)}</span>
                    </div>
                    <p className="movie-overview">{movie.overview}</p>
                    <p className="movie-year">{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
            <h3 className="movie-title">{movie.title}</h3>
        </div>
    );
}

export default MovieCard;
