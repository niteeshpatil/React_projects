import { NavLink } from "react-router-dom";
// insted of using anker tag 'a' onclick lode new page with relode
// using 'Link'/'NavLink' page request of new page without relode

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">Welcome</a> */}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
