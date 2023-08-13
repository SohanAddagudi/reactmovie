import React from 'react'

const MovieCard = ({ movie1 }) => {
    return (
        <div className = 'movie'>
            <div>
                <p>{movie1.Year}</p>
            </div>

            <div>
                <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt = {movie1.Title}/>
            </div>
{/* asd */}
            <div>
                <span>{movie1.Type.toUpperCase()}</span>
                <h3>{(movie1.Title).toUpperCase()}</h3>
                <h3>------------------------</h3>
            </div>
        </div>

    )
}

export default MovieCard;