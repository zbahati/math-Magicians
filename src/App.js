import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/">
            <div className="Home">
              <Home />
            </div>
          </Router>
          <Route path="/Calculator">
            <div className="container">
              <div className="title">
                <p>let us do some Maths!</p>
              </div>
              <div className="calculator-container">
                <Calculator />
              </div>
            </div>
          </Route>
          <Router path="/Quotes">
            <div className="quotes">
              <Quotes />
            </div>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
