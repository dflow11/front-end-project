import { useState, useEffect } from 'react';
import "../css/Favorites.css";
import MovieCard from '../components/MovieCard';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const loadFavorites = () => {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            setFavorites(storedFavorites);
        };

        loadFavorites();
        // Listen for changes in localStorage
        window.addEventListener('storage', loadFavorites);
        
        return () => {
            window.removeEventListener('storage', loadFavorites);
        };
    }, []);

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favorite Movies Yet</h2>
                <p>Start adding movies to your favorites and they will appear here</p>
            </div>
        );
    }

    return (
        <div className="favorites-container">
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;