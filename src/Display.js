import React from 'react';
import PropTypes from 'prop-types';

function Display({ input }) {
  return (
    <div id="display">{ input }</div>
  );
}

Display.defaultProps = {
  input: 'Hello',
};

Display.propTypes = {
  input: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default Display;
