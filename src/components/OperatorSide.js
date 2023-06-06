import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ handleClick }) => {
  const operatorButtons = ['÷', 'x', '-', '+', '='];

  return (
    <div className="operator-section">
      {operatorButtons.map((operator) => (
        <button type="button" key={operator} onClick={() => handleClick(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
};

Operator.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Operator;
