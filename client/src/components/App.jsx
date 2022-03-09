import React from 'react';
import Search from './Search.jsx'
import MovieList from './MovieList.jsx'
import exampleMovies from '../data/exampleMovies.js'

const App = (props) => (
  <div>
    <div className="title-bar">
      <h1>MovieList</h1>
    </div>
    <Search />
    <MovieList movies={exampleMovies} />
  </div>
);

export default App;