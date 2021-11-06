import React from 'react';
import PropTypes from 'prop-types';

function Display({ input }) {
  return (
    <div id="display">
      { (!!input === false || input === '0')
       && <p>Date</p> }
    </div>
  );
}

Display.defaultProps = {
  input: 'Home',
};

Display.propTypes = {
  input: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default Display;
