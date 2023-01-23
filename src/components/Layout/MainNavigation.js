import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <div className={classes.navblock}>
      <h1>Orders</h1>
      <ul className={classes.list}>
        {/* <li className={classes.button}>
          <NavLink to="/">Order</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default MainNavigation;
