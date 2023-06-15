import React, { useState } from 'react';
import CalculatorScreen from './CalculatorScreen';
import CalculatorBody from './CalculatorBody';
import Operator from './OperatorSide';
import calculate from '../logic/calculator';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({});

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div>
      <CalculatorScreen result={calculatorData.next || calculatorData.total || '0'} />
      <div className="main-body">
        <CalculatorBody handleClick={handleClick} />
        <Operator handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
