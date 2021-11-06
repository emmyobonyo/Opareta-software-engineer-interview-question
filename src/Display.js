import React from 'react';
import PropTypes from 'prop-types';
import Dated from './Date';

function Display({ input }) {
  return (
    <div id="display">
      { (!!input === false || input === '0')
       && <Dated /> }
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
