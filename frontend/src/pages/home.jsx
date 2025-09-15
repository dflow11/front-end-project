import MovieCard from "../components/MovieCard"
import{useState} from "react"
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "Superman", release_date: "2025"},
        { id: 2, title: "Demon Slayer: Infinity Castle", release_date: "2025"},
        { id: 3, title: "Fantastic Four: First Steps", release_date: "2025"},
        { id: 4, title: "K-Pop Demon Hunters", release_date: "2025"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
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
            </form>

        <div className = "movies-gird">
            {movies.map((movie) => (
                <MovieCard movie = {movie} key = {movie.id}/>
                ))}
        </div>
    </div>
    );
}

export default Home