import React from 'react';
import PropTypes from 'prop-types';

const Search = ({searchOnChange}) => (
  <div className="search-container">
    <input type="text" className="search-form" placeholder="Search..." onChange={searchOnChange} />
    {/* <button className="search-button">Go!</button> */}
  </div>
);

Search.propTypes = {
  searchOnChange: PropTypes.func.isRequired
}

export default Search;