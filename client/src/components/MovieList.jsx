import React from 'react';
import PropTypes from 'prop-types';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => (
  <div className="movie-list">
    {movies.map((movie, key) => <MovieListEntry key={key} movie={movie} />)}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;