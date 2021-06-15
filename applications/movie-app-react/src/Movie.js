import React from 'react';

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280/';

const setVoteClass = (vote) => {
    if (vote >= 8.0) {
        return "green";
    }
    else if (vote >= 6.0) {
        return "yellow";
    }
    else {
        return "red";
    }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={IMAGE_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average} </span>
        </div>

        <div className="movie-over">
            <h2>Overview</h2>
            <span>{overview}</span>

        </div>
    </div>
);

export default Movie;