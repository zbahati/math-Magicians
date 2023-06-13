import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">
        <h1>Math Magician</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li>
          <Link to="/Quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
