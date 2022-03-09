import React from 'react';
import PropTypes from 'prop-types';

const MovieListEntry = ({movie, watched, index, handleClick}) => (
  <div className="movie-entry">
    <div className="movie-title"> {movie.title} </div>
    <button className="movie-watched-button"
            onClick={() => handleClick(index)}>
      {watched ? 'Watched' : 'Not Watched'}
    </button>
  </div>
);

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieListEntry;