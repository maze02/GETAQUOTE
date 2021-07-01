import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Right Quote</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-quote">Calculate a new quote</Link>
          </li>
          <li>
            <Link to="/favorites">Quote collections</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
