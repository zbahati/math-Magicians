import React from 'react';
import PropTypes from 'prop-types';

function CalculatorScreen({ result }) {
  return (
    <div>
      <div className="calculator-screen">
        <p>{ result }</p>
      </div>
    </div>
  );
}

CalculatorScreen.propTypes = {
  result: PropTypes.func.isRequired,
};

export default CalculatorScreen;
