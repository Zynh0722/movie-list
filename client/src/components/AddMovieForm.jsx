import React from 'react';
import PropTypes from 'prop-types';

class AddMovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: undefined
    };
  };

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    const { addMovie } = this.props;

    return (
      <div className="add-movie-container">
        <input className="add-movie-form"
               type="text"
               placeholder="Add a movie..."
               onChange={(e) => {this.handleChange(e)}}
               onSubmit={() => addMovie(this.state.input)} />
        <button className="add-movie-button" type="submit" onClick={() => addMovie(this.state.input)}>Add</button>
      </div>
    );
  }
}

export default AddMovieForm;