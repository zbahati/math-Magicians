import CalculatorScreen from './CalculatorScreen';
import CalculatorBody from './CalculatorBody';
import Operator from './OperatorSide';

function Calculator() {
  return (
    <div>
      <CalculatorScreen />
      <div className="main-body">
        <CalculatorBody />
        <Operator />
      </div>
    </div>
  );
}

export default Calculator;
