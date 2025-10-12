function MovieCardSkeleton() {
    return (
        <div className="movie-card skeleton">
            <div className="poster skeleton" style={{ aspectRatio: '2/3' }}></div>
            <div className="movie-info">
                <div className="skeleton" style={{ height: '24px', width: '80%', marginBottom: '8px' }}></div>
                <div className="skeleton" style={{ height: '16px', width: '40%' }}></div>
            </div>
        </div>
    );
}

export default MovieCardSkeleton;