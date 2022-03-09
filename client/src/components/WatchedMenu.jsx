import React from 'react';
import PropTypes from 'prop-types';

class WatchedMenu extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { handleToWatchClick, toWatch } = this.props;

    return (
      <div className="watched-menu">
        <button className="watched-menu-button"
                style={{backgroundColor: toWatch ? 'lightgreen' : ''}}
                onClick={() => handleToWatchClick(true)}> To Watch </button>
        <button className="watched-menu-button"
                style={{backgroundColor: toWatch ? '' : 'lightgreen'}}
                onClick={() => handleToWatchClick(false)}> Watched </button>
      </div>
    );
  }
}

export default WatchedMenu;