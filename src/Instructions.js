import React from 'react';

function Instructions() {
  return (
    <div>
      <p>
        When a user enters a
        <span>false</span>
        value AKA
        <span> no value is entered </span>
        the date will be displayed. This date updates every second
      </p>
      <p>
        When an input with spaces is entered,
        it&apos;s converted into an array and the individual
        elements of the array is displayed
      </p>
      <p>If the input is not of the two, it will be displayed as is.</p>
    </div>
  );
}

export default Instructions;
