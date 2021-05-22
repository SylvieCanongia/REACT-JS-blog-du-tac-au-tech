import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

/* header__link--active */

const Header = ({ categories }) => (
  <header className="header">
    <nav className="header__nav">
      {categories.map((category) => (
        <a className="header__nav__link" key={category.label} href={category.route}>
          {category.label}
        </a>
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
