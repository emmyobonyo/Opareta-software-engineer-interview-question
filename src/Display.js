import React from 'react';
import PropTypes from 'prop-types';
import Dated from './Date';
import ArrayInput from './ArrayInput';
import Instructions from './Instructions';

function Display({ input }) {
  return (
    <div id="display">
      { (!!input === false || input === '0')
       && <Dated /> }
      { (input.includes(' '))
       && <ArrayInput input={input.split(' ')} /> }
      { (!input.includes(' '))
       && <div>{input}</div>}
      <Instructions />
    </div>
  );
}

Display.defaultProps = {
  input: ' ',
};

Display.propTypes = {
  input: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default Display;
