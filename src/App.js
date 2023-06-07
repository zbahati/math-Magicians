import Calculator from './components/calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <div>
      <div className="container">
        <Calculator />
      </div>
      <div className="quotes">
        <Quotes />
      </div>
    </div>
  );
}

export default App;
