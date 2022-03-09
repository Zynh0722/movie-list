import React from 'react';
import AddMovieForm from './AddMovieForm.jsx'
import WatchedMenu from './WatchedMenu.jsx'
import Search from './Search.jsx';
import debounce from 'lodash.debounce';
import MovieList from './MovieList.jsx';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      query: undefined,
      movies: exampleMovies,
      toWatch: true
    };
  };

  toggleWatched(movieIndex) {
    this.setState({
      movies: this.state.movies.map((movie, key) => {
        if (key === movieIndex) {
          return {
            ...movie,
            watched: !movie.watched
          };
        } else {
          return movie;
        }
      })
    });
  }

  addMovie(movie) {
    if (movie) {
      this.setState({
        movies: [...this.state.movies, {title: movie, watched: false}]
      });
    };
  }

  handleToWatchClick(watchState) {
    this.setState({
      toWatch: watchState
    });
  };

  searchOnChangeHandler (e) {
    e.persist();
    this.throttledSearchOnChange(e.target.value);
  };

  throttledSearchOnChange = debounce((value) => {
    this.setState({ query: value });
  }, 100, {'maxWait': 100, 'leading': true});

  render() { return (
    <React.Fragment>
      <div className="title-bar">
        <h1>MovieList</h1>
      </div>
      <AddMovieForm addMovie={this.addMovie.bind(this)} />
      <Search searchOnChange={this.searchOnChangeHandler.bind(this)} />
      <WatchedMenu toWatch={this.state.toWatch} handleToWatchClick={this.handleToWatchClick.bind(this)} />
      <MovieList movies={this.state.movies} query={this.state.query} entryHandleClick={this.toggleWatched.bind(this)} toWatch={this.state.toWatch} />
    </React.Fragment>
  )};
}

export default App;