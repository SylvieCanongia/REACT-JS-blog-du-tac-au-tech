import React from 'react';
// import PropTypes from 'prop-types';

import './header.scss';

const Header = () => (
  <nav className="header">
    <a className="header__link header__link--active">Accueil</a>
    <a className="header__link">React</a>
    <a className="header__link">Vue JS</a>
    <a className="header__link">Formations</a>
    <a className="header__link">Autre</a>
  </nav>
);

// Header.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       route: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default Header;
