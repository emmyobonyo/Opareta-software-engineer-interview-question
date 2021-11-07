import React from 'react';
import PropTypes from 'prop-types';

function ArrayInput({ input }) {
  return (
    <div className="display">
      { input.map((inputs) => (
        <div key={input.indexOf(inputs)}>{inputs}</div>
      ))}
    </div>
  );
}

ArrayInput.defaultProps = {
  input: ' ',
};

ArrayInput.propTypes = {
  input: PropTypes.oneOfType([
    PropTypes.array,
  ]),
};

export default ArrayInput;
