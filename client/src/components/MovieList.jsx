import React from 'react';
import PropTypes from 'prop-types';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({movies, query, toWatch, entryHandleClick}) => (
  <div className="movie-list">
    {movies.map((movie, key) => {
      if ((!query || movie.title.toLowerCase().includes(query.toLowerCase())) && (toWatch === !movie.watched)) {
        return (<MovieListEntry key={key} index={key} movie={movie} handleClick={entryHandleClick} watched={movie.watched} />);
      }
    })}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  query: PropTypes.string
};

export default MovieList;