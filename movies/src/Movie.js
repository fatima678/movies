import React from 'react';
import './Movie.css'; 

const Movie = ({ image, title, releaseYear }) => {
  return (
        <div className="movie">
            <img src={image} alt={title} className="movie-image" />
            <h2 className="movie-title">{title}</h2>
            <p className="movie-release-year">{releaseYear}</p>
            <a href="your-link-here" class="watch-now-button">Watch Now</a>
        </div>
  );
};

export default Movie;
