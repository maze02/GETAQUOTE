import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Right Quote</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Calculate a new quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-quote" activeClassName={classes.active}>
              View Shared Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
