import MovieCard from "../components/MovieCard"
import MovieCardSkeleton from "../components/MovieCardSkeleton"
import EmptyState from "../components/EmptyState"
import ScrollToTop from "../components/ScrollToTop"
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api";
import { useLocation } from "react-router-dom";
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies] = useState ([]);
    const [error, setError] = useState (null);
    const [loading, setLoading] = useState(true);

    const loadPopularMovies = async () => {
        try {
            setLoading(true);
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            setSearchQuery(""); // Reset search query
            setError(null);
        } 
        catch (err) {
            console.log(err);
            setError("Failed to load movies");
        } 
        finally {
            setLoading(false);
        }
    };

    const location = useLocation();

    useEffect(() => {
        loadPopularMovies();
    }, [location.state?.reload]); // Reload when navigation state changes


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery.trim())
            setMovies(Array.isArray(searchResults) ? searchResults : [])
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies")
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    return ( 
        <div className = "home">
            <form onSubmit={handleSearch} className = "search-form">
                <input 
                    type="text" 
                    placeholder="Search for Movies..." 
                    className = "search-input"
                    value = {searchQuery}
                    onChange ={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className = "search-button">Search</button>
            </form>

            {error && <div className="error-message"></div>}

                {loading ? (
        <div className="loading">Loading…</div>
        ) : error ? (
        <div className="error-message">{error}</div>
        ) : movies.length === 0 ? (
        <EmptyState
            title="No results found"
            message={
            searchQuery.trim()
                ? `We could not find any matches for “${searchQuery.trim()}”. Try a different title.`
                : "Try searching for a movie above."
            }
        />
        ) : (
        <div className="movies-grid">
            {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
            ))}
        </div>
        )}
    </div>
    );
}

export default Home