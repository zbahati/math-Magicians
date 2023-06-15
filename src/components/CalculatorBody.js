import React from 'react';
import PropTypes from 'prop-types';

const CalculatorBody = ({ handleClick }) => {
  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <div className="calculator-body">
      <div className="func">
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
      </div>
      <div className="number-section number-grid">
        {numberButtons.map((number) => (
          <button type="button" key={number} onClick={() => handleClick(number.toString())}>
            {number}
          </button>
        ))}
      </div>
      <div className="body-footer">
        <button type="button" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
};

CalculatorBody.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorBody;
