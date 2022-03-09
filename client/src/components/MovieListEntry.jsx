import React from 'react';
import PropTypes from 'prop-types';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    };
  }

  handleClick(e) {
    this.setState({
      watched: !this.state.watched
    });
  };

  render() {
    const {movie} = this.props;

    return (
      <div className="movie-entry"
           style={{fontWeight: this.state.watched ? 'bold': 'normal'}}
           onClick={this.handleClick.bind(this)}>
        {movie.title}
      </div>
    );
  }
}
MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieListEntry;