import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ categories }) => (
  <header className="header">
    <nav className="header__nav">
      {categories.map((category) => (
        <NavLink to={category.route} className="header__nav__link" key={category.label} activeClassName="header__nav__link--active" exact>
          {category.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
